import { Box, Link, Text } from "@chakra-ui/react";

interface IItemProps {
  children: React.ReactNode;
  href: string;
  [rest: string]: any;
}

const Item = ({ children, href, ...rest }: IItemProps) => {
  return (
    <Link href={href}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default Item;
