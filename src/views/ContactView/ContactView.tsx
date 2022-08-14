import { sendMessageRequest } from "lib/messageApi";

/** Interfaces/types */
import { IContact } from "lib/interfaces/Prismic";

/** components */
import { HStack, Box, Heading, Container, VStack } from "@chakra-ui/react";
import { ContactForm, Section, SocialItems } from "lib/components";
import AtomMachine from "lib/components/AtomMachine";

interface IContactViewProps {
  contact: IContact;
  [rest: string]: any;
}

const ContactView = ({ contact, ...rest }: IContactViewProps) => {
  const onSubmit = async ({ name, email, message }) => {
    await sendMessageRequest({ name, sender: email, message });
  };

  return (
    <Section {...rest}>
      <VStack>
        <Heading as="h2" size="xl">
          {contact.contact_view_title || "Contact"}
        </Heading>
        <Box maxW={["100%", "90%", "80%", "80%"]} mb="2rem !important">
          {AtomMachine({
            atoms: contact.contact_view_subtext,
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
    </Section>
  );
};

export default ContactView;
