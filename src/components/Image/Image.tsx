import NextImage from "next/image";
/** Interfaces/types */

/** components */

interface IImageProps {
  width: number;
  height: number;
  src: string;
  alt?: string;
}

const Image = ({ width, height, src, alt }: IImageProps) => {
  return (
    <div>
      <NextImage width={width} height={height} src={src} alt={alt} />
    </div>
  );
};

export default Image;
