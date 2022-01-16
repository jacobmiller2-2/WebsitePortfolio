import { Formik, Field, Form, ErrorMessage } from "formik";
/** Interfaces/types */

/** components */
import {
  FormControl,
  // FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  VStack,
  Button,
  Textarea,
} from "@chakra-ui/react";
import FormLabel from "../FormLabel";

interface IContactFormProps {
  onSubmit: () => void;
}

const initialFormValues = { name: "", email: "", message: "" };

const ContactForm = ({ onSubmit }: IContactFormProps) => {
  // const onFormikSubmit = (values: any, actions: any) => {};

  const validateEmail = (value: string, props) => {
    console.log(props.touched);
    if (
      props.touched.email &&
      (!value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
    ) {
      console.log("invalid email");
      return "Invalid email address";
    }
  };

  const validateSingle = (value: string, props) => {
    if (value?.length >= 100) {
      return `Character count must be less than 100. [${value.length}/${100}]`;
    }
  };

  const validateMany = (value: string, props) => {
    if (value?.length >= 3000) {
      return `Character count must be less than 3000. [${
        value.length
      }/${3000}]`;
    }
  };

  return (
    <VStack w="80%" m="auto">
      <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
        {(props) => (
          <Form style={{ width: "100%" }} spellCheck={false}>
            <Field
              name="name"
              validate={(value: string) => validateSingle(value, props)}
            >
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.name && form.touched.name}
                  marginBottom="1rem"
                >
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    {...field}
                    id="name"
                    placeholder="Jane Doe"
                    borderRadius="0px"
                  />
                  {props.errors.name && (
                    <FormErrorMessage>{props.errors.name}</FormErrorMessage>
                  )}
                </FormControl>
              )}
            </Field>
            <Field
              name="email"
              validate={(value: string) => validateEmail(value, props)}
            >
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.email && form.touched.email}
                  marginBottom="1rem"
                >
                  <FormLabel htmlFor="email">Contact</FormLabel>
                  <Input
                    {...field}
                    id="email"
                    placeholder="janedoe@company.com"
                    borderRadius="0px"
                  />

                  {props.errors.email ? (
                    <FormErrorMessage>{props.errors.email}</FormErrorMessage>
                  ) : (
                    <FormHelperText>
                      Please leave an email to reach you back.
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            </Field>
            <Field
              name="message"
              validate={(value: string) => validateMany(value, props)}
            >
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.message && form.touched.message}
                  marginBottom="1rem"
                >
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    {...field}
                    id="message"
                    placeholder="Message..."
                    borderRadius="0px"
                    // as="textarea"
                    // pt="5px"
                  />
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              type="submit"
              isLoading={props.isSubmitting}
              // isDisabled={form.errors}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default ContactForm;
