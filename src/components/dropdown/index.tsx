"use client";
import React from "react";
import Select, { ValueContainerProps, components } from "react-select";
import { customDropDownStyles } from "./constants";
import { Control, Controller, FieldValues } from "react-hook-form";
import { InfoCircle } from "iconsax-react";
import Popup from "reactjs-popup";
interface DropDownProps {
  control: Control<FieldValues>;
  name: string;
  options: { label: string; value: string }[];
  isInvalid?: boolean;
  errorMessage?: string;
  label: string;
  rules?: any;
}

const DropDown: React.FC<DropDownProps> = (props) => {
  const { control, name, label, options, isInvalid, errorMessage, rules } =
    props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <div>
            <div>{label}</div>
            <div className={`flex items-center`}>
              <div className={`w-[50%]`}>
                <Select
                  ref={ref}
                  options={options}
                  styles={customDropDownStyles}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  isSearchable={false}
                />
              </div>

              {isInvalid && (
                <Popup
                  key={`input-error`}
                  trigger={
                    <InfoCircle
                      size="12"
                      color="red"
                      style={{ cursor: "pointer", marginLeft: "5px" }}
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
      }}
    />
  );
};
export default DropDown;
