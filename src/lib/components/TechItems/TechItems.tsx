/** Interfaces/types */

/** components */
import techPics from "techPics";
import { Tooltip } from "@chakra-ui/react";

interface ITechItemsProps {
  techs: any[];
}

const TechItems = ({ techs }: ITechItemsProps) => {
  return techs.map(
    (tech, i: number) =>
      techPics[tech] && (
        <Tooltip label={techPics[tech].name} key={`tech-icon-${i}`}>
          <span
            style={{ width: "30px", paddingLeft: "0px", marginRight: ".5rem" }}
          >
            {techPics[tech].pic()}
          </span>
        </Tooltip>
      )
  );
};

export default TechItems;
