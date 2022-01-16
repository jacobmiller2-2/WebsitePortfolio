/** Interfaces/types */

/** components */
import { FormLabel as ChakraFormLabel, Text } from "@chakra-ui/react";

interface IFormLabelProps {
  children: JSX.Element | string;
  htmlFor?: string;
  indicator?: string;
  [rest: string]: any;
}

const FormLabel = ({
  htmlFor,
  indicator = "*",
  children,
  ...rest
}: IFormLabelProps) => {
  return (
    <ChakraFormLabel
      htmlFor={htmlFor}
      requiredIndicator={
        <Text as="span" fontSize="1rem" color="primary.default">
          {" "}
          {indicator}
        </Text>
      }
      {...rest}
    >
      {children}
    </ChakraFormLabel>
  );
};

export default FormLabel;
