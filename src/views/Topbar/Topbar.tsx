/** Components */
import { Stack, Spacer, Link, Text, Container, Flex } from "@chakra-ui/react";
import { LinkItem } from "./components";

interface ITopbarProps {
  [rest: string]: any;
}

const Topbar = ({ ...rest }: ITopbarProps) => {
  return (
    <Stack
      direction="row"
      align="center"
      padding={"36px 5%"}
      // paddingBlock={["5%", "5%", "5%", "0"]}
      spacing={10}
      bgColor="card.default"
      {...rest}
    >
      <Text color="text.primary">Logo</Text>
      <Spacer />
      <LinkItem href="/#experience">Experience</LinkItem>
      <LinkItem href="/#about">About</LinkItem>
      <LinkItem href="/#projects">Projects</LinkItem>
    </Stack>
  );
};
export default Topbar;
