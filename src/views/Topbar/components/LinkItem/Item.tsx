import { Box, Link, Text, Heading } from "@chakra-ui/react";

interface IItemProps {
  children: React.ReactNode;
  href: string;
  [rest: string]: any;
}

const Item = ({ children, href, ...rest }: IItemProps) => {
  return (
    <Heading display="block" size="sm" {...rest}>
      <Link href={href} color="text.primary">
        {children}
      </Link>
    </Heading>
  );
};

export default Item;
