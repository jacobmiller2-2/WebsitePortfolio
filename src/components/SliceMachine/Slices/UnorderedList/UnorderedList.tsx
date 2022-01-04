/** Interfaces/types */

import { IAtom, ISlice } from "interfaces/Prismic";

/** Components */
import AtomMachine from "components/AtomMachine";
import { List, ListItem } from "@chakra-ui/react";

interface IUnorderedListProps {
  slice: ISlice;
  options?: any;
}

const UnorderedList = ({ slice, options }: IUnorderedListProps) => {
  if (!slice) {
    return null;
  }

  const renderListItems = (items) => {
    return items.map(
      ({ list_item: atoms }: { list_item: IAtom[] }, i: number) => {
        console.log(i);
        return (
          <ListItem key={`unordered-list-item-${i}`} color="primary.default">
            {AtomMachine({ atoms, options })}
          </ListItem>
        );
      }
    );
  };

  return <List styleType="'⇴ '">{renderListItems(slice.items)}</List>;
};

export default UnorderedList;
