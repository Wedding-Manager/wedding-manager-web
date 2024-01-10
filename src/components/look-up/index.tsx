"use client";

import React from "react";

import AsyncSelect from "react-select/async";

import { Control, Controller, FieldValues } from "react-hook-form";
import { customDropDownStyles } from "../dropdown/constants";
import api from "@/utils/api";
import { customLookUpStyles } from "./constants";

const promiseOptions = async (inputValue: string) => {
  try {
    const request = await api().get(`/v1/user/lookup?q=${inputValue}`);
    const users = request?.data;
    const userOptions = users?.map((user: any) => {
      return {
        label: user?.name,
        value: user?._id,
        data: user,
      };
    });
    return userOptions;
  } catch (err) {
    console.log("ERROR", err);
    return [];
  }
};

function UserLookup(props: {
  control: Control<FieldValues>;
  name: string;
  label: string;
  isInValid?: boolean;
  errorMessage?: string;
  containerStyles?: any;
}) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <div>
            <div>{props.label}</div>
            <AsyncSelect
              ref={ref}
              styles={customLookUpStyles}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              cacheOptions
              isSearchable
              loadOptions={promiseOptions}
            />
          </div>
        );
      }}
    />
  );
}
export default UserLookup;
