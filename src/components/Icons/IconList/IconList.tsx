import { Box } from "@chakra-ui/react";

const IconList = ({ children, ...rest }) => {
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      gap="0.5rem"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default IconList;
