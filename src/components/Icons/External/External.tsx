import { FaExternalLinkAlt } from "react-icons/fa";

const defaultProps = {
  size: 32,
  fill: "white",
};

const External = (size?: number) => {
  if (size) {
    return () => <FaExternalLinkAlt {...defaultProps} size={size} />;
  }
  return <FaExternalLinkAlt {...defaultProps} />;
};

export default External;
