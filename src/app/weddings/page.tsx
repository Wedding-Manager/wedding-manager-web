import CustomInput from "@/components/input";
import { weddingSubmitHandler } from "@/stores/weddings";
import { WeddingFormData } from "@/types/weddings";
import React, { Ref } from "react";
import { useForm } from "react-hook-form";

function Weddings() {
  const {
    register,
    handleSubmit,
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
                message: "Name is required",
              },
            })}
            placeholder="enter name"
            className="border-solid border-2 border-indigo-600"
          />
        </form>
      </div>
    </div>
  );
}

export default Weddings;
