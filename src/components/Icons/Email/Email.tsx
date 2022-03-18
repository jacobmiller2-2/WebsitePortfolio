import { FiMail } from "react-icons/fi";

const defaultProps = {
  size: 32,
  fill: "white",
};
const Email = (size?: number): (() => JSX.Element) => {
  if (size) {
    return () => <FiMail {...defaultProps} size={size} />;
  }
  return () => <FiMail {...defaultProps} />;
};
export default Email;
