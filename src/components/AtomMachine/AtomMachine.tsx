import NextLink from "next/link";
/** Interfaces/Types */
import {
  EAtomType,
  ESpanType,
  IAtom,
  IHyperlinkData,
} from "interfaces/Prismic";

/** Components */
import {
  Text,
  Box,
  Link,
  ListItem,
  StylesProvider,
  ListIcon,
} from "@chakra-ui/react";
import { IoOptions } from "react-icons/io5";

interface AtomMachineProps {
  atoms: IAtom[];
  options?: {
    Text: {
      fontSize?: string;
      color?: string;
      variant?: string;
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
        return handleSpans(atom, options);
      case EAtomType.LIST_ITEM:
        return (
          <ul style={{ listStylePosition: "outside" }}>
            <StylesProvider value={{}}>
              <ListItem listStyleType="none">
                {/* <Box h="100%" display="inline-block"> */}
                <ListIcon
                  icon={IoOptions}
                  color="primary.default"
                  // position="absolute"
                  // left="0px"
                  // paddingLeft="30px"
                  // marginBottom="10px"
                  // marginRight="30px"
                  // h="100%"
                />
                {/* </Box> */}
                {/* {atom.text} */}
                {handleSpans(atom, {
                  ...options,
                  Text: {
                    ...options.Text,
                    as: "span",
                    textAlign: "match-parent",
                    // paddingLeft: "30px",
                    // css: {
                    //   textAlign: "webkitMatchParent",
                    //   backgroundColor: "red",
                    // },
                  },
                })}
              </ListItem>
            </StylesProvider>
          </ul>
          //@ts-ignore
          // <StylesProvider value={{}}>
          //   <ListItem listStyleType="none">
          //     {/* <Box h="100%" display="inline-block"> */}
          //     <ListIcon
          //       icon={IoOptions}
          //       color="primary.default"
          //       position="absolute"
          //       left="0px"
          //       paddingLeft="30px"
          //       marginBottom="10px"
          //       // marginRight="30px"
          //       // h="100%"
          //     />
          //     {/* </Box> */}
          //     {/* {atom.text} */}
          //     {handleSpans(atom, {
          //       ...options,
          //       Text: {
          //         ...options.Text,
          //         as: "span",
          //         textAlign: "match-parent",
          //         // paddingLeft: "30px",
          //         // css: {
          //         //   textAlign: "webkitMatchParent",
          //         //   backgroundColor: "red",
          //         // },
          //       },
          //     })}
          //   </ListItem>
          // </StylesProvider>
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
      <Text as="span" {...options?.Text}>
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
    sections.push(getSpan(span, text));
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
