// 1. Import the extendTheme function
import { extendTheme, Theme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
export const _theme: Theme = {
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
    Icon: {
      variants: {
        link: {
          _hover: {
            fill: "primary.default",
          },
        },
      },
    },
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
        tertiary: {
          color: "text.secondary",
          fontSize: "0.75rem",
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
        xs: { fontSize: "1.15rem", fontWeight: "thin body" },
        sm: { fontSize: "1.5rem" },
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
      //@ts-ignore
      baseStyle: {
        color: "primary.dark",
        fontSize: "1.25rem",
        position: "relative",
        _hover: {
          color: "primary.default",
        },

        _after: {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "0.1em",
          backgroundColor: "primary.default",
          opacity: 0,
          transition: "opacity 300ms, transform 300ms",
        },
        transform: "scale(0)",
        transformOrigin: "center",
      },
      //@ts-ignore
      variants: {
        secondary: {
          fontSize: "1rem",
          color: "text.secondary",
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
      dark: "#040404",
    },
    text: { primary: "#E4E6EB", secondary: "#b0b3b8" },
    card: {
      default: "#242526",
      light: "#3A3B3C",
      dark: "#0A0B0C",
    },
  },
};

const theme = extendTheme(_theme);

export default theme;
