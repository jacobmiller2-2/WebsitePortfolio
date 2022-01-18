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
import { ContactForm, SocialItems } from "components";
import AtomMachine from "components/AtomMachine";
import { sendMessageRequest } from "lib/messageApi";

interface IContactViewProps {
  contact: IContact;
  [rest: string]: any;
}

const ContactView = ({ contact, ...rest }: IContactViewProps) => {
  const onSubmit = async ({ name, email, message }) => {
    await sendMessageRequest({ name, sender: email, message });
  };

  console.log(contact.contact_view_subtext);
  return (
    <Container maxW="container.lg" h="100%" minH="100vh">
      <VStack>
        <Heading as="h2" size="xl">
          {contact.contact_view_title || "Contact"}
        </Heading>
        <Box maxW={["100%", "90%", "80%", "80%"]} mb="2rem !important">
          {AtomMachine({
            atoms: contact.contact_view_subtext,
            // options: {
            //   Text: { variant: "secondary" },
            //   Link: { fontSize: "md" },
            // },
          })}
        </Box>
        <HStack
          maxW="container.lg"
          w={["100%", "100%", "80%", "80%"]}
          mb="2rem !important"
        >
          <ContactForm onSubmit={onSubmit} />
        </HStack>
        <Heading as="h3" size="lg">
          {contact.contact_view_social_title || "Or, connect via social media"}
        </Heading>
        <VStack spacing={2}>{SocialItems({ socials: contact.socials })}</VStack>
      </VStack>
    </Container>
  );
};

export default ContactView;
