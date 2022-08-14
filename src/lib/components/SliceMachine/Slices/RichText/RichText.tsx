/** Interfaces/types */

import AtomMachine from "lib/components/AtomMachine";
import { ISlice } from "lib/interfaces/Prismic";
import React from "react";

/** components */

interface IRichTextProps {
  slice: ISlice;
  options?: any;
  [rest: string]: any;
}

const RichText = ({ slice, options, ...rest }: IRichTextProps) => {
  return (
    <React.Fragment {...rest}>
      {AtomMachine({ atoms: slice.primary.description, options })}
    </React.Fragment>
  );
};

export default RichText;
