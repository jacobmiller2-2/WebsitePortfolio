/** Interfaces/types */

/** Components */
import { Box, IconButton } from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

interface IMenuToggleProps {
  toggle: () => void;
  open: boolean;
}

const MenuToggle = ({ toggle, open }: IMenuToggleProps) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      <IconButton
        aria-label={`${open ? "close" : "open"} nav menu`}
        borderColor="card.light"
        backgroundColor="card.default"
        color="paper.dark"
      >
        {open ? <IoCloseSharp /> : <BiMenu />}
      </IconButton>
    </Box>
  );
};

export default MenuToggle;
