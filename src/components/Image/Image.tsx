import NextImage from "next/image";
/** Interfaces/types */

/** components */
import { Text, Box, Heading } from "@chakra-ui/react";

interface IImageProps {
  width: number;
  height: number;
  src: string;
  alt?: string;
  altText?: string;
}

const Image = ({ width, height, src, alt, altText }: IImageProps) => {
  if (!src) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="text.primary"
        w="100%"
        h="100%"
        p="8rem 3rem"
      >
        <NextImage
          height={80}
          width={80}
          src="/portfolio_logo_inverted_v5.svg"
          alt="Site Logo"
          layout="intrinsic"
          // placeholder="blur"
        />
        <Heading as="span" color="card.default">
          {altText || "No image available"}
        </Heading>
      </Box>
    );
  }

  return (
    <Box>
      <NextImage
        width={width}
        height={height}
        src={src}
        alt={alt}
        layout="intrinsic"
        // placeholder="blur"
      />
    </Box>
  );
};

export default Image;
