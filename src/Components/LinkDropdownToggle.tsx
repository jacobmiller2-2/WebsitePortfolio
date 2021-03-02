import React from "react";

//@ts-ignore
const LinkDropdownToggle = React.forwardRef(({ children, onClick }, ref) => {
  return (
    <span
      //@ts-ignore
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </span>
  );
});

export default LinkDropdownToggle;
