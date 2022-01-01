// 1. Import the extendTheme function
import { extendTheme, Theme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const _theme: Theme = {
  fonts: {
    heading:
      "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif; ",
    mono: "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif; ",
    body: "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif; ",
  },
  components: {
    Text: {
      baseStyle: {
        color: "text.primary",
        fontSize: "1.25rem",
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
        sm: {},
        md: {
          fontWeight: "thin body",
        },
        lg: {},
        xl: {},
        "2xl": {},
        "3xl": {},
        "4xl": { fontSize: "5.25rem" },
      },
    },
    //@ts-ignore
    Tag: {
      baseStyle: {
        container: {
          color: "text.primary",
          bg: "primary.default",
          border: "1px solid",
          borderColor: "primary.default",
          padding: "0.5rem",
        },
        label: {
          color: "text.primary",
          bg: "red",
          // border: "8px solid red",
        },
        closeButton: {
          // border: "8px solid red",
        },
      },
      defaultProps: {
        variant: "none",
        size: "md",
        colorScheme: "none",
      },
    },
    Link: {
      baseStyle: {
        color: "primary.default",
        fontSize: "1.25rem",
      },
    },
  },
  colors: {
    //@ts-ignore
    primary: {
      default: "#0AB377",
    },
    paper: {
      default: "#18191A",
    },
    text: { primary: "#E3E6EB" },
    card: {
      default: "#242526",
      light: "#3A3B3C",
      dark: "#0A0B0C",
    },
  },
};

const theme = extendTheme(_theme);

export default theme;
