/** Interfaces/types */

/** components */
import { Box, Link, Text } from "@chakra-ui/react";
import { MinSocialItems } from "lib/components";
import { ISocial } from "lib/interfaces/Prismic";
import NextLink from "next/link";

interface IFooterProps {
  socials: ISocial[];
}

const Footer = ({ socials }: IFooterProps) => {
  const renderLinks = (
    links: TLink[],
    options: { useNext: boolean; label?: string; baseKey: string }
  ) => {
    const { useNext, label, baseKey } = options;

    const renderLink = (link: TLink, useNext) => {
      return useNext ? (
        <NextLink href={link.href} passHref>
          <Link variant="secondary" target={link.external ? "_blank" : ""}>
            {link.label}
          </Link>
        </NextLink>
      ) : (
        <Link
          href={link.href}
          variant="secondary"
          target={link.external ? "_blank" : ""}
        >
          {link.label}
        </Link>
      );
    };

    return (
      <Box display="flex" flexDir="column">
        <Box p="0 1rem">{label && <Text variant="tertiary">{label}</Text>}</Box>
        {links.map((link: TLink, i: number) => {
          return (
            <Box p="0 1rem" key={`${baseKey}-${i}`}>
              {renderLink(link, useNext)}
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Box
      as="footer"
      bgColor="#0A0A0B"
      p="4rem"
      display="flex"
      flexDir="row"
      justifyContent="center"
    >
      {renderLinks(internal, {
        useNext: true,
        baseKey: "internal",
        label: "​",
      })}
      <MinSocialItems socials={socials ?? []} alignItems="center" />
      {renderLinks(inspiration, {
        useNext: false,
        label: "Inspired by",
        baseKey: "inspiration",
      })}
    </Box>
  );
};

export default Footer;

type TLink = { label: string; href: string; external: boolean };

const internal: TLink[] = [
  { label: "Contact", href: "/#contact", external: false },
  { label: "Experience", href: "/#experience", external: false },
  { label: "Archive", href: "/archive", external: false },
];

const inspiration: TLink[] = [
  {
    label: "Brittany Chiang",
    href: "https://brittanychiang.com",
    external: true,
  },
  { label: "Jack Jeznach", href: "https://jacekjeznach.com/", external: true },
];
