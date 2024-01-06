"use client";

import SubmitButton from "@/components/button";
import CustomInput from "@/components/input";
import UserLookup from "@/components/look-up";
import { weddingSubmitHandler } from "@/stores/weddings";
import { WeddingFormData } from "@/types/weddings";

import React from "react";
import { Control, FieldValues, useForm } from "react-hook-form";

function CreateWedding(): JSX.Element {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<WeddingFormData>();
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(weddingSubmitHandler)}>
          <CustomInput
            isInvalid={!!errors?.title}
            errorMessage={errors?.title?.message}
            label={"Wedding Title"}
            {...register("title", {
              required: {
                value: true,
                message: "Wedding title is required",
              },
            })}
            placeholder="Enter"
            className="border-solid border-2 border-indigo-600"
          />
          <UserLookup
            control={control as unknown as Control<FieldValues>}
            name="groom"
            label="Groom"
          />
          <UserLookup
            control={control as unknown as Control<FieldValues>}
            name="bribe"
            label="Bribe"
          />
          <CustomInput
            isInvalid={!!errors?.wedding_date}
            errorMessage={errors?.wedding_date?.message}
            label={"Wedding Date"}
            {...register("wedding_date", {
              required: {
                value: true,
                message: "Wedding Date is required",
              },
            })}
            type="date"
            placeholder="Select"
            className="border-solid border-2 border-indigo-600"
          />
          <CustomInput
            isInvalid={!!errors?.avenue}
            errorMessage={errors?.avenue?.message}
            label={"Avenue"}
            {...register("avenue", {
              required: {
                value: true,
                message: "Avenue  is required",
              },
            })}
            placeholder="Enter"
            className="border-solid border-2 border-indigo-600"
          />
          <div>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateWedding;
