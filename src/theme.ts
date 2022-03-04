// 1. Import the extendTheme function
import { extendTheme, Theme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const _theme: Theme = {
  fonts: {
    heading:
      "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif; ",
    mono: "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif; ",
    body: "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif; ",
    //@ts-ignore
    code: "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Fira Code, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif; ",
  },
  styles: {
    global: {
      body: {
        zIndex: 1000,
      },
      footer: {
        bgColor: "paper.default",
      },
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "text.primary",
        fontSize: "1.25rem",
      },
      variants: {
        accent: {
          color: "primary.default",
          fontFamily: "code",
          fontSize: ".85rem",
        },
        secondary: {
          color: "text.secondary",
          fontSize: "1rem",
        },
        soft: {
          color: "text.secondary",
          fontSize: "1rem",
          fontFamily: "code",
        },
      },
    },

    //@ts-ignore
    // Button: {
    //   baseStyle: {
    //     bgColor: "paper.primary",
    //     _hover: {
    //       bgColor: "card.default",
    //     },
    //     color: "primary.default",
    //     borderColor: "primary.default",
    //     borderWidth: "1px",
    //   },
    //   defaultProps: {
    //     variant: "none",
    //     size: "md",
    //     colorScheme: "none",
    //   },
    // },
    Button: {
      baseStyle: {
        textTransform: "uppercase",
        bgColor: "primary.default",
        _hover: {
          bgColor: "primary.dark",

          borderColor: "primary.dark",
        },
        color: "paper.default",
        borderColor: "primary.default",
        borderWidth: "1px",
      },
      variants: {
        //@ts-ignore
        secondary: {
          bgColor: "paper.default",
          _hover: {
            bgColor: "paper.light",
            color: "primary.light",
            borderColor: "primary.light",
          },
          color: "primary.default",
          borderColor: "primary.default",
        },
      },
      defaultProps: {
        variant: "none",
        size: "md",
        colorScheme: "none",
      },
    },
    //@ts-ignore
    Heading: {
      baseStyle: {
        color: "text.primary",
        // fontWeight: "very fine",
      },
      sizes: {
        xs: {},
        sm: { fontSize: "1.25rem", fontWeight: "thin body" },
        md: { fontSize: "2.0rem" },
        lg: { fontSize: "2.25rem" },
        xl: { fontSize: "2.75rem" },
        "2xl": {},
        "3xl": {},
        "4xl": { fontSize: "5.25rem" },
      },
    },
    FormLabel: {
      baseStyle: {
        color: "text.primary",
      },
    },
    //@ts-ignore
    Textarea: {
      baseStyle: {
        bgColor: "card.default",
        color: "text.primary",
        fontFamily: "code",
        _placeholder: {
          color: "text.secondary",
        },
        _autofill: {
          border: "1px solid",
          borderColor: "primary.default",
          bgColor: "red",
          outline: "none",
        },
      },
      defaultProps: {
        variant: "none",
        size: "md",
      },
    },
    //@ts-ignore
    Input: {
      baseStyle: {
        element: {
          color: "red",
          _autofill: {
            border: "1px solid",
            borderColor: "primary.default",
            bgColor: "red",
            outline: "none",
          },
        },
        field: {
          fontFamily: "code",
          color: "text.primary",
          bgColor: "card.default",
          _placeholder: {
            color: "text.secondary",
          },

          _focus: {
            border: "1px solid",
            borderColor: "primary.default",
          },
          _autofill: {
            border: "1px solid",
            borderColor: "primary.default",
            outline: "none",
          },
        },
        addon: {},
      },
      defaultProps: {
        variant: "none",
        size: "md",
      },
    },
    Form: {
      baseStyle: {
        //@ts-ignore
        container: {},
        helperText: {
          color: "text.secondary",
        },
        requiredIndicator: {
          color: "primary.default",
        },
      },
      defaultProps: {
        variant: "none",
        size: "md",
      },
    },
    //@ts-ignore
    Tag: {
      baseStyle: {
        container: {
          color: "primary.default",
          bg: "paper.default",
          border: "1px solid",
          borderColor: "primary.default",
          padding: "0.5rem",
        },
        label: {
          color: "text.primary",
        },
        closeButton: {},
      },
      defaultProps: {
        variant: "none",
        size: "md",
        colorScheme: "none",
      },
    },
    Link: {
      baseStyle: {
        color: "primary.dark",
        fontSize: "1.25rem",
        _hover: {
          color: "primary.default",
        },
      },
    },
    LinkOverlay: {
      baseStyle: {
        color: "red",
        fontSize: "1.25rem",
      },
    },
  },
  colors: {
    //@ts-ignore
    primary: {
      // default: "#29DCE6",
      default: "#ff0040",
      light: "#FF1E56",
      dark: "#cc0033",
    },
    paper: {
      default: "#18191A",
      light: "#1B1C1D",
      // default: "#151A4F",
      // default: "#0f0e14",
      // default: "#1a1816",
    },
    text: { primary: "#E4E6EB", secondary: "#b0b3b8" },
    card: {
      default: "#242526",
      // default: "#1A1916",
      light: "#3A3B3C",
      dark: "#0A0B0C",
    },
  },
};

const theme = extendTheme(_theme);

export default theme;
