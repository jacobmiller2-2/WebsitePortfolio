import { FaYoutube } from "react-icons/fa";

const defaultProps = {
  size: 32,
  fill: "white",
};
const Youtube = (size?: number) => {
  if (size) {
    return () => <FaYoutube {...defaultProps} size={size} />;
  }
  return () => <FaYoutube {...defaultProps} />;
};
export default Youtube;
