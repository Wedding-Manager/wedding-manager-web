import React from "react";
import Select, { ContainerProps, components } from "react-select";
import { customDropDownStyles } from "./constants";
import { Control, Controller, FieldValues } from "react-hook-form";
import { InfoCircle } from "iconsax-react";
import inputStyles from "./dropdown.module.scss";

const DropDown = (props: {
  control: Control<FieldValues>;
  name: string;
  options: { label: string; value: string }[];
  isInValid?: boolean;
  errorMessage?: string;
}) => {
  const SelectContainer = ({ children, ..._props }: ContainerProps<any>) => {
    return (
      <div>
        <components.ValueContainer {..._props}>
          {!props.isInValid && (
            <div className={inputStyles["input-error-container"]}>
              <div className={`tooltip`}>
                <InfoCircle size="12" color="red" />
                <span className="tooltiptext">{"test"}</span>
              </div>
            </div>
          )}
          {children}
        </components.ValueContainer>
      </div>
    );
  };
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Select
          ref={ref}
          options={props.options}
          styles={customDropDownStyles}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          components={{ SelectContainer }}
        />
      )}
    />
  );
};
export default DropDown;
