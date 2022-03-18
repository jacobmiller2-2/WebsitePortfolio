import Github from "./Github";
import Linkedin from "./Linkedin";
import Email from "./Email";
import Youtube from "./Youtube";

import { ESocialProvider } from "interfaces/Prismic";
import React from "react";

export const getIcon = (
  provider: ESocialProvider,
  size?: number
): JSX.Element => {
  switch (provider) {
    case ESocialProvider.GITHUB:
      //@ts-ignore
      return SizedIcon(size || 32, Github);
    case ESocialProvider.LINKEDIN:
      //@ts-ignore
      return SizedIcon(size || 32, Linkedin);
    case ESocialProvider.EMAIL:
      //@ts-ignore
      return SizedIcon(size || 32, Email);
    case ESocialProvider.YOUTUBE:
      //@ts-ignore
      return SizedIcon(size || 32, Youtube);
    default:
      return null;
  }
};

export const SizedIcon = (
  size: number,
  icon: (size: number) => React.ReactElement
) => icon(size);

export { default as IconList } from "./IconList";

export { default as Github } from "./Github";
export { default as Linkedin } from "./Linkedin";
export { default as Email } from "./Email";
export { default as Youtube } from "./Youtube";

export { default as External } from "./External";
export { default as Docker } from "./Docker";
