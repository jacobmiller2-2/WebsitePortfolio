import Github from "./Github";
import Linkedin from "./Linkedin";
import Email from "./Email";
import Youtube from "./Youtube";

import { ESocialProvider } from "interfaces/Prismic";

export const getIcon = (provider: ESocialProvider) => {
  switch (provider) {
    case ESocialProvider.GITHUB:
      return Github;
    case ESocialProvider.LINKEDIN:
      return Linkedin;
    case ESocialProvider.EMAIL:
      return Email;
    case ESocialProvider.YOUTUBE:
      return Youtube;
    default:
      return null;
  }
};

export { default as IconList } from "./IconList";

export { default as Github } from "./Github";
export { default as Linkedin } from "./Linkedin";
export { default as Email } from "./Email";
export { default as Youtube } from "./Youtube";

export { default as External } from "./External";
