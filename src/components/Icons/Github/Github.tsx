import { FaGithub } from "react-icons/fa";

const defaultProps = {
  size: 32,
  fill: "white",
};
const Github = (size?: number) => {
  if (size) {
    return () => <FaGithub {...defaultProps} size={size} />;
  }
  return <FaGithub {...defaultProps} />;
};

export default Github;
