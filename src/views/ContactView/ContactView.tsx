/** Interfaces/types */

import { IContact } from "interfaces/Prismic";
/** components */
import {
  HStack,
  Box,
  Text,
  Heading,
  Divider,
  Container,
  VStack,
} from "@chakra-ui/react";
import { ContactForm } from "components";

interface IContactViewProps {
  contact: IContact;
  [rest: string]: any;
}

const ContactView = ({ contact, ...rest }: IContactViewProps) => {
  const onSubmit = () => {};

  return (
    <Container maxW="container.lg" h="100%" minH="100vh">
      <VStack>
        <Heading as="h2" size="xl">
          {contact.contact_view_title || "Contact"}
        </Heading>
        <HStack w="container.lg">
          <ContactForm onSubmit={onSubmit} />
        </HStack>
        <Heading as="h3" size="lg">
          {contact.contact_view_social_title || "Or, connect via social media"}
        </Heading>
      </VStack>
    </Container>
  );
};

export default ContactView;
