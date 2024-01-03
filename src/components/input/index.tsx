"use client";
import { Eye, EyeSlash, InfoCircle } from "iconsax-react";
import React, { Fragment, LegacyRef, forwardRef, useState } from "react";
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
    const { isInvalid, errorMessage, label, type, ...rest } = props;
    const [showPassword, setShowPassword] = useState<boolean>();
    return (
      <div>
        <div>{label}</div>
        <div
          className={`flex items-center gap-2 ${inputStyles["input-container"]}`}
        >
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
            type={type === "password" && showPassword ? "text" : type || "text"}
            {...rest}
            className={inputStyles?.["custom-input"]}
          />
          {type === "password" && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <EyeSlash size="16" color="black" />
              ) : (
                <Eye size="16" color="black" />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);
export default CustomInput;
