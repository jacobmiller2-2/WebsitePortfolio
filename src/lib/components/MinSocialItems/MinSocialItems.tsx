/** Interfaces/types */
import { ISocial } from "lib/interfaces/Prismic";

/** Components */
import { Box, Icon, LinkOverlay, LinkBox } from "@chakra-ui/react";
import React from "react";
import { getIcon } from "lib/components/Icons";

type SocialItemsProps = {
  socials: ISocial[];
  [rest: string]: any;
};

const MinSocialItems = ({ socials, ...rest }: SocialItemsProps) => {
  const renderSocials = () => {
    return socials.map((social: ISocial, i: number) => {
      return (
        <LinkBox m="1" key={`min-social-item-${i}`}>
<<<<<<< HEAD:src/lib/components/MinSocialItems/MinSocialItems.tsx
          <Icon as={getIcon(social.social_provider)} fill="black" />
=======
          {/* @ts-ignore */}
          <Icon as={getIcon(social.social_provider)} />
>>>>>>> f23b7c8f1929274a6000afef06956b6ce71be759:src/components/MinSocialItems/MinSocialItems.tsx
          <LinkOverlay href={social.social_link}></LinkOverlay>
        </LinkBox>
      );
    });
  };

  return (
    <Box display="flex" flexDir="row" {...rest}>
      {renderSocials()}
    </Box>
  );
};

export default MinSocialItems;
