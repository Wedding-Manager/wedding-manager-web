"use client";

import SubmitButton from "@/components/button";
import CustomCheckBox from "@/components/checkbox/page";
import CustomInput from "@/components/input";
import UserLookup from "@/components/look-up";
import UploadImage from "@/components/upload/page";
import { weddingSubmitHandler } from "@/stores/weddings";
import { WeddingFormData } from "@/types/weddings";
import { useRouter } from "next/navigation";

import React from "react";
import { Control, FieldValues, useForm } from "react-hook-form";

function CreateWedding(): JSX.Element {
  const formMethods = useForm<WeddingFormData>();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = formMethods;

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit((_) =>
            weddingSubmitHandler(_, () => {
              router?.push("/");
            })
          )}
        >
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
            label="Bride"
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
          <CustomCheckBox
            isInvalid={!!errors?.is_public}
            errorMessage={errors?.is_public?.message}
            label={"Do you want to share Memories to public"}
            {...register("is_public", {
              required: {
                value: false,
                message: "Avenue  is required",
              },
            })}
            placeholder="Enter"
            className="border-solid border-2 border-indigo-600"
          />
          <UploadImage formMethods={formMethods} parentName="photo_gallery" />
          <div>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateWedding;
