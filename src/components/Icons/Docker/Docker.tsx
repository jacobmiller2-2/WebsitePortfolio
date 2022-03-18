import { FaDocker } from "react-icons/fa";

const defaultProps = {
  size: 32,
  fill: "white",
};

const Docker = (size?: number) => {
  if (size) {
    return () => <FaDocker {...defaultProps} size={size} />;
  }
  return <FaDocker {...defaultProps} />;
};

export default Docker;
