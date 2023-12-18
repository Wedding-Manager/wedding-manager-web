"use client";
import { InfoCircle } from "iconsax-react";
import React, { Fragment, LegacyRef, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import inputStyles from "./input.module.scss";

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(
  (
    props: UseFormRegister<any> & {
      isInvalid: boolean;
      errorMessage?: string;
      label: string;
    } & React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const { isInvalid, errorMessage, label, ...rest } = props;
    return (
      <div>
        <div>{label}</div>
        <div className={inputStyles["input-container"]}>
          {isInvalid && (
            <div className={inputStyles["input-error-container"]}>
              <div className={`tooltip`}>
                <InfoCircle size="12" color="red" />
                <span className="tooltiptext">{errorMessage}</span>
              </div>
            </div>
          )}
          <input
            ref={ref}
            {...rest}
            className={inputStyles?.["custom-input"]}
          />
        </div>
      </div>
    );
  }
);
export default CustomInput;
