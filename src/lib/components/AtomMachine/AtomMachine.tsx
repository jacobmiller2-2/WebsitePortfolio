import React from "react";
import NextLink from "next/link";

/** Interfaces/Types */
import {
  EAtomType,
  ESpanType,
  IAtom,
  IHyperlinkData,
} from "lib/interfaces/Prismic";

/** Components */
import { Text, Link } from "@chakra-ui/react";

interface AtomMachineProps {
  atoms: IAtom[];
  options?: {
    Text: {
      fontSize?: string;
      color?: string;
      variant?: string;
    };
    Link: {
      fontSize?: string;
    };
  };
}

const AtomMachine = ({
  atoms,
  options,
}: AtomMachineProps): React.ReactNode[] => {
  const mapAtomToComponent = (atom: IAtom, i) => {
    switch (atom.type as EAtomType) {
      case EAtomType.PARAGRAPH:
        return (
          <React.Fragment key={`atom-${i}`}>
            {handleSpans(atom, options)}
          </React.Fragment>
        );

      default:
        console.log("No Component for atom: ", atom);
        return null;
    }
  };

  if (!atoms) {
    return null;
  }

  const mappedAtoms = atoms.map(mapAtomToComponent);

  return mappedAtoms;
};

export default AtomMachine;

const handleSpans = (
  atom: IAtom,
  options
): React.ReactNode[] | React.ReactNode => {
  const { spans, text } = atom;

  if (!spans || spans.length === 0) {
    return (
      <Text as="span" key={`text-start`} {...options?.Text}>
        {text}
      </Text>
    );
  }

  let sections = [];
  let curr = 0;
  spans.forEach((span, i: number) => {
    if (span.start > curr) {
      sections.push(
        <Text key={`text-${i}`} as="span" {...options?.Text}>
          {text.substring(curr, span.start)}
        </Text>
      );
    } else {
    }
    sections.push(getSpan(span, text, i, options));
    curr = span.end;
  });
  if (curr < text.length) {
    sections.push(
      <Text key={`text-${spans.length}`} as="span" {...options?.Text}>
        {text.substring(curr)}
      </Text>
    );
  }
  return sections;
};

const getSpanText = (span, text) => {
  return text.substring(span.start, span.end);
};

const getSpan = (span, text, i?, options?) => {
  switch (span.type as ESpanType) {
    case ESpanType.HYPERLINK:
      const data: IHyperlinkData = span.data;
      if (data.link_type === "Web") {
        return (
          <NextLink href={data.url} passHref key={`link-${i}`}>
            <Link target={data.target} rel="noreferrer" {...options?.Link}>
              {getSpanText(span, text)}
            </Link>
          </NextLink>
        );
      } else {
        return (
          <Link
            href={data.url}
            target={data.target}
            key={`link-${i}`}
            rel="noreferrer"
            {...options?.Link}
          >
            {text}
          </Link>
        );
      }
    default:
      return null;
  }
};
