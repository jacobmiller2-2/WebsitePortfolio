/** Interfaces/types */

import { ISocial } from "lib/interfaces/Prismic";

/** components */
import { Box, Link, Icon, LinkOverlay, LinkBox } from "@chakra-ui/react";
import { getIcon } from "lib/components/Icons";

interface ISocialItemsProps {
  socials: ISocial[];
}

const SocialItems = ({ socials }: ISocialItemsProps) => {
  const renderSocialItems = () => {
    return socials.map((social: ISocial, i: number) => (
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
        key={`social-item-${i}`}
      >
        <Icon as={getIcon(social.social_provider)} fill="black" />
        <LinkOverlay
          href={social.social_link}
          ml="1rem"
          fontSize="md"
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
