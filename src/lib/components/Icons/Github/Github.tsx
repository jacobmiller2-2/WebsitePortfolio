import { FaGithub } from "react-icons/fa";

const defaultProps = {
  size: 32,
  fill: "white",
};
<<<<<<< HEAD:src/lib/components/Icons/Github/Github.tsx
const Github = ({ size }: { size?: number }) => {
=======
const Github = (size?: number): (() => React.ReactElement) => {
>>>>>>> f23b7c8f1929274a6000afef06956b6ce71be759:src/components/Icons/Github/Github.tsx
  if (size) {
    return <FaGithub {...defaultProps} size={size} />;
  }
  return () => <FaGithub {...defaultProps} />;
};

export default Github;
