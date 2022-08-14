import { FaLinkedin } from "react-icons/fa";

const defaultProps = {
  size: 32,
  fill: "white",
};
const Linkedin = ({ size }: { size?: number }) => {
  if (size) {
    return <FaLinkedin {...defaultProps} size={size} />;
  }
  return <FaLinkedin {...defaultProps} />;
};

export default Linkedin;
