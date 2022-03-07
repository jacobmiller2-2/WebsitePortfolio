/** Interfaces/types */

import { ESocialProvider, ISocial } from "interfaces/Prismic";

/** components */
import { Box, Link, Icon, LinkOverlay, LinkBox } from "@chakra-ui/react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

import { FiMail } from "react-icons/fi";

interface ISocialItemsProps {
  socials: ISocial[];
}

const SocialItems = ({ socials }: ISocialItemsProps) => {
  const renderSocialItems = () => {
    return socials.map((social: ISocial) => (
      <LinkBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        borderColor="text.secondary"
        borderRadius="md"
        p="1rem"
        m="1rem"
        minW={["225px"]}
        bgColor="card.default"
      >
        <Icon as={getProviderIcon(social.social_provider)} />
        <LinkOverlay
          href={social.social_link}
          ml="1rem"
          fontSize="md"
          // color="primary.default"
          color="text.secondary"
          _hover={{ color: "primary.default" }}
        >
          {social.social_display_text}
        </LinkOverlay>
      </LinkBox>
    ));
  };

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {renderSocialItems()}
    </Box>
  );
};

export default SocialItems;

export const getProviderIcon = (provider: ESocialProvider) => {
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

const Github = () => <FaGithub size={32} fill="white" />;

const Linkedin = () => <FaLinkedin size={32} fill="white" />;

const Email = () => <FiMail size={32} fill="white" />;

const Youtube = () => <FaYoutube size={32} fill="white" />;
