"use client";
import CustomInput from "@/app/components/form-item/page";
import { Child, UserData } from "@/types/signup";
import api from "@/utils/api";
import Script from "next/script";
import React, { BaseSyntheticEvent, FormEvent } from "react";
import { useFieldArray, useForm } from "react-hook-form";

function SignUp() {
  const {
    handleSubmit,
    register,
    watch,
    control,
    formState: { errors },
  } = useForm<UserData>();
  const { fields, append } = useFieldArray({
    name: "family.children",
    control,
  });
  const isFemale = watch("gender") === "female";
  console.log("error", errors, isFemale);
  const handleSignUpSubmit = async (
    data: UserData,
    event: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    event!.stopPropagation();
    event!.preventDefault();
    const endpoint = `/v1/user`;
    try {
      const request = await api().post(endpoint, data);
      console.log("1FORM_DATA", request);
    } catch (err) {
      console.log("2FORM_DATA", err);
    }
    console.log("FORM_DATA", data);
  };
  return (
    <div>
      <Script id="sign-up">
        <title>Sign up</title>
      </Script>
      <form onSubmit={handleSubmit(handleSignUpSubmit)}>
        <section id="self-details">
          <CustomInput
            isInvalid={!!errors?.name}
            errorMessage={errors?.name?.message}
            label={"Name"}
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            placeholder="enter name"
            className="border-solid border-2 border-indigo-600"
          />

          <div>
            <label>SurName</label>
            <input
              {...register("surname", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              placeholder="enter name"
              className="border-solid border-2 border-indigo-600"
            />
          </div>
          <div>
            <label>Gender</label>
            <select
              id="gender"
              {...register("gender", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              className="border-solid border-2 border-indigo-600"
              placeholder="Select"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label>H.No</label>
            <input
              {...register("h_no", {
                required: {
                  value: true,
                  message: "H.No is required",
                },
              })}
              placeholder="enter"
              className="border-solid border-2 border-indigo-600"
            />
          </div>
          <div>
            <label>Place</label>
            <input
              {...register("place", {
                required: {
                  value: true,
                  message: "Place is required",
                },
              })}
              placeholder="enter"
              className="border-solid border-2 border-indigo-600"
            />
          </div>
          <div>
            <label>Mobile</label>
            <input
              {...register("mobile", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="number"
              placeholder="enter name"
              className="border-solid border-2 border-indigo-600"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="email"
              placeholder="enter"
              className="border-solid border-2 border-indigo-600"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="password"
              placeholder="enter name"
              className="border-solid border-2 border-indigo-600"
            />
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              {...register("repeat_password", {
                required: {
                  value: true,
                  message: "Repeat Password is required",
                },
              })}
              type="password"
              placeholder="enter name"
              className="border-solid border-2 border-indigo-600"
            />
          </div>
        </section>
        <section id="family">
          <div>
            <label>Father</label>
            <input
              {...register("family.father")}
              placeholder="enter name"
              className="border-solid border-2 border-indigo-600"
            />
          </div>
          <div>
            <label>Mother</label>
            <input
              {...register("family.mother")}
              placeholder="enter name"
              className="border-solid border-2 border-indigo-600"
            />
          </div>
          {isFemale ? (
            <div>
              <label>Husband</label>
              <input
                {...register("family.husband")}
                placeholder="enter name"
                className="border-solid border-2 border-indigo-600"
              />
            </div>
          ) : (
            <div>
              <label>Wife</label>
              <input
                {...register("family.wife")}
                placeholder="enter name"
                className="border-solid border-2 border-indigo-600"
              />
            </div>
          )}
          <div className="flex-col gap-2 items-center">
            {fields?.map((child, index) => {
              return (
                <div key={child.id}>
                  <label>{`child-${index}`}</label>
                  <input
                    {...register(`family.children.${index}.name`)}
                    placeholder="enter name"
                    className="border-solid border-2 border-indigo-600"
                  />
                </div>
              );
            })}
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                append({ name: undefined });
              }}
            >
              Add child
            </button>
          </div>
        </section>
        <button type="submit" className="border-solid bg-purple-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
