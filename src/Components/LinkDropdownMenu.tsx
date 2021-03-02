import React from "react";
const LinkDropdownToggle = React.forwardRef(
  //@ts-ignore
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    return (
      <div
        //@ts-ignore
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        {children}
      </div>
    );
  }
);

export default LinkDropdownToggle;
