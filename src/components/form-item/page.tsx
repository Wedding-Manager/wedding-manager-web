import React, { Fragment, LegacyRef, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(
  (
    props: UseFormRegister<any> & {
      isInvalid: boolean;
      errorMessage: string;
      label: string;
    },
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const { isInvalid, errorMessage, label, ...rest } = props;
    return (
      <div>
        <div>{label}</div>
        <div style={{ position: "relative" }}>
          {isInvalid && (
            <span style={{ position: "absolute", top: "50%" }}>
              {errorMessage}
            </span>
          )}
          <input ref={ref} {...rest} />
        </div>
      </div>
    );
  }
);
export default CustomInput;
