/** Interfaces/types */

import { ISocial } from "lib/interfaces/Prismic";

/** components */
import {
  Box,
  Link,
  Icon,
  LinkOverlay,
  LinkBox,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { getIcon } from "lib/components/Icons";

interface ISocialItemsProps {
  socials: ISocial[];
}

const SocialItems = ({ socials }: ISocialItemsProps) => {
  const renderSocialItems = () => {
    return socials.map((social: ISocial, i: number) => (
      <GridItem w="50%" key={`social-item-${i}`}>
        <LinkBox
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          border="1px solid"
          borderColor="text.secondary"
          borderRadius="md"
          p="1rem"
          m="1rem"
          minW={["225px"]}
          bgColor="card.default"
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
      </GridItem>
    ));
  };

  return (
    <Grid templateColumns="1fr 1fr" gap={2}>
      {renderSocialItems()}
    </Grid>
  );
};

export default SocialItems;
