"use client";
import { Eye, EyeSlash, InfoCircle } from "iconsax-react";
import React, { Fragment, LegacyRef, forwardRef, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import Popup from "reactjs-popup";

// eslint-disable-next-line react/display-name
const CustomCheckBox = forwardRef(
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
        <div className={`flex items-center gap-2 py-4`}>
          <input ref={ref} type={"checkbox"} {...rest} className={""} />
          <span>{label}</span>
          {isInvalid && (
            <Popup
              key={`input-error`}
              trigger={
                <InfoCircle
                  size="12"
                  color="red"
                  style={{ cursor: "pointer" }}
                />
              }
              position={"left center"}
              on={["hover", "focus"]}
              arrow={true}
            >
              <div className={`bg-black rounded-lg`}>
                <span className="text-white p-5">{errorMessage}</span>
              </div>
            </Popup>
          )}
        </div>
      </div>
    );
  }
);
export default CustomCheckBox;
