import { Box, Link, Text } from "@chakra-ui/react";

interface IItemProps {
  children: React.ReactNode;
  href: string;
}

const Item = ({ children, href }: IItemProps) => {
  return (
    <Link href={href}>
      <Text>{children}</Text>
    </Link>
  );
};

export default Item;
