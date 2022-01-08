/**
 *
 * Maps each slice to a component
 *
 * @returns {JSX.Element[]} for each slice
 */

/** Interfaces / Types */
import { ISlice, ESliceType } from "interfaces/Prismic";

/** Components */
import { UnorderedList, RichText } from "./Slices";

interface ISliceGeneratorProps {
  slices: ISlice[];
  options?: any;
  [rest: string]: any;
}

const SliceMachine = ({
  slices,
  options,
  ...rest
}: ISliceGeneratorProps): any => {
  const mapSliceToComponent = (slice: ISlice, i: number) => {
    if (!slice) {
      // No slice
      return null;
    }
    switch (slice.slice_type as ESliceType) {
      case ESliceType.UNORDERED_LIST:
        return (
          <UnorderedList
            slice={slice}
            key={`slice-${i}`}
            options={options}
            {...rest}
          />
        );

      case ESliceType.RICH_TEXT:
        return (
          <RichText
            slice={slice}
            key={`slice-${i}`}
            options={options}
            {...rest}
          />
        );

      default:
        return null;
    }
  };

  if (!slices) {
    return null;
  }

  return slices.map(mapSliceToComponent);
};

export default SliceMachine;
