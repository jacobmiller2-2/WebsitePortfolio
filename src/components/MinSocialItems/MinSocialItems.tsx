/** Interfaces/types */
import { ISocial } from "interfaces/Prismic";

/** Components */
import { Box, Icon, LinkOverlay, Link, LinkBox } from "@chakra-ui/react";
import React from "react";
import { getProviderIcon } from "components/SocialItems/SocialItems";
import styled from "@emotion/styled";

type SocialItemsProps = {
  socials: ISocial[];
  [rest: string]: any;
};

const MinSocialItems = ({ socials, ...rest }: SocialItemsProps) => {
  const renderSocials = () => {
    return socials.map((social: ISocial) => {
      return (
        <LinkBox m="1">
          <Icon as={getProviderIcon(social.social_provider)} />
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
