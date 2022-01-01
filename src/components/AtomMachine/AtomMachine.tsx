import NextLink from "next/link";
/** Interfaces/Types */
import {
  EAtomType,
  ESpanType,
  IAtom,
  IHyperlinkData,
} from "interfaces/Prismic";

/** Components */
import { Text, Link } from "@chakra-ui/react";

interface AtomMachineProps {
  atoms: IAtom[];
}

const AtomMachine = ({ atoms }: AtomMachineProps): React.ReactNode[] => {
  const mapAtomToComponent = (atom: IAtom, i) => {
    switch (atom.type as EAtomType) {
      case EAtomType.PARAGRAPH:
        console.log(atom);
        // return <p key={`atom-${i}`}></p>;
        return handleSpans(atom);
      default:
        console.log("No Component for atom: ", atom);
        return null;
    }
  };

  const mappedAtoms = atoms.map(mapAtomToComponent);

  return mappedAtoms;
};

export default AtomMachine;

const handleSpans = (atom: IAtom): React.ReactNode[] | React.ReactNode => {
  const { spans, text } = atom;

  if (!spans || spans.length === 0) {
    return <Text>{text}</Text>;
  }

  let sections = [];
  let curr = 0;
  spans.forEach((span, i: number) => {
    console.log("curr", curr);
    if (span.start > curr) {
      sections.push(
        <Text key={`text-${i}`} as="span">
          {text.substring(curr, span.start)}
        </Text>
      );
    } else {
    }
    sections.push(getSpan(span, text));
    curr = span.end;
  });
  return sections;
};

const getSpanText = (span, text) => {
  return text.substring(span.start, span.end);
};

const getSpan = (span, text) => {
  switch (span.type as ESpanType) {
    case ESpanType.HYPERLINK:
      const data: IHyperlinkData = span.data;
      if (data.link_type === "Web") {
        return (
          <NextLink href={data.url} passHref>
            <Link target={data.target}>{getSpanText(span, text)}</Link>
          </NextLink>
        );
      } else {
        return (
          <Link href={data.url} target={data.target}>
            {text}
          </Link>
        );
      }
    default:
      return null;
  }
};
