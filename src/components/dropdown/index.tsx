"use client";
import React from "react";
import Select, { ValueContainerProps, components } from "react-select";
import { customDropDownStyles } from "./constants";
import { Control, Controller, FieldValues } from "react-hook-form";
import { InfoCircle } from "iconsax-react";
interface DropDownProps {
  control: Control<FieldValues>;
  name: string;
  options: { label: string; value: string }[];
  isInValid?: boolean;
  errorMessage?: string;
  label: string;
}

const DropDown: React.FC<DropDownProps> = (props) => {
  const ValueContainer = ({
    children,
    ...containerProps
  }: ValueContainerProps<any>) => {
    return (
      <components.ValueContainer {...containerProps}>
        {children}
        {props?.isInValid && (
          <span className={`tooltip`}>
            <InfoCircle size="12" color="red" />
            <span className="tooltiptext">{"test"}</span>
          </span>
        )}
      </components.ValueContainer>
    );
  };
  return (
    <Controller
      control={props?.control}
      name={props?.name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <div>
            <div>{props?.label}</div>
            <Select
              ref={ref}
              options={props?.options}
              styles={customDropDownStyles}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              isSearchable={false}
              components={{ ValueContainer }}
            />
          </div>
        );
      }}
    />
  );
};
export default DropDown;
