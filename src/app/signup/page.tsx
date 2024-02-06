/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import CustomInput from "@/components/input";
import { UserData } from "@/types/signup";

import Script from "next/script";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Control, FieldValues, useFieldArray, useForm } from "react-hook-form";
import DropDown from "../../components/dropdown";
import UserLookup from "../../components/look-up";
import SubmitButton from "../../components/button";
import { getEmailfromUrl } from "@/utils/query";
import { useGlobalStore } from "@/stores/global";
import { handleSignUpSubmit } from "@/stores/login";
import ErrorPopup from "@/components/error-popup";

function SignUp() {
  const {
    handleSubmit,
    register,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<UserData>();
  const user = useGlobalStore();
  const { setUser } = user as any;
  const router = useRouter();
  const [signupError, setSignupError] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const nextUrl = searchParams?.get("next");
  const { fields, append } = useFieldArray({
    name: "family.children",
    control,
  });
  const isFemale = watch("gender")?.value === "female";

  useEffect(() => {
    if (nextUrl?.length) {
      const email = getEmailfromUrl(nextUrl);
      setValue("email", email);
    }
  }, [nextUrl]);

  return (
    <div className="mb-6">
      <Script id="sign-up">
        <title>Sign up</title>
      </Script>
      <form
        onSubmit={handleSubmit((_, e) => {
          e?.stopPropagation();
          e?.preventDefault();
          handleSignUpSubmit(_, {
            onSuccess: (data) => {
              setUser({ userName: data?.name, userId: data?.id, userRole: "" });
              if (nextUrl?.length) {
                router.push(nextUrl);
              } else {
                router.push("/");
              }
            },
            onError: (error) => {
              setSignupError(error?.errorMessage?.replace('"', ""));
              console.log(
                "ERROR_SIGNUP",
                error?.errorMessage?.replace('"', "")
              );
            },
          });
        })}
      >
        <section id="self-details" className="px-2 md:px-10 mt-20">
          {!!signupError && (
            <ErrorPopup
              isOpen={!!signupError}
              message={signupError}
              onClose={() => {
                setSignupError(undefined);
              }}
            />
          )}
          <div className="mb-4 text-xl ">Basic Info</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pl-5  md:pl-20 border-2 border-gray-700 py-10">
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
            <CustomInput
              isInvalid={!!errors?.name}
              errorMessage={errors?.name?.message}
              label={"Surname"}
              {...register("surname", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              placeholder="Enter"
              className="border-solid border-2 border-indigo-600"
            />
            <DropDown
              control={control as unknown as Control<FieldValues>}
              errorMessage={errors?.gender?.message}
              name="gender"
              isInvalid={!!errors?.gender}
              options={[
                {
                  label: "Male",
                  value: "male",
                },
                {
                  label: "Female",
                  value: "female",
                },
              ]}
              rules={{
                required: { value: true, message: "Gender is Required" },
              }}
              label="Gender"
            />
            <CustomInput
              isInvalid={!!errors?.h_no}
              errorMessage={errors?.h_no?.message}
              label={"H.No."}
              {...register("h_no", {
                required: {
                  value: true,
                  message: "H.No is required",
                },
              })}
              placeholder="Enter"
              className="border-solid border-2 border-indigo-600"
            />
            <CustomInput
              isInvalid={!!errors?.place}
              errorMessage={errors?.place?.message}
              label={"Place"}
              {...register("place", {
                required: {
                  value: true,
                  message: "Place is required",
                },
              })}
              placeholder="Enter"
              className="border-solid border-2 border-indigo-600"
            />
            <CustomInput
              isInvalid={!!errors?.mobile}
              errorMessage={errors?.mobile?.message}
              label={"Mobile"}
              {...register("mobile", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              placeholder="Enter"
              className="border-solid border-2 border-indigo-600"
            />
            <CustomInput
              isInvalid={!!errors?.email}
              errorMessage={errors?.email?.message}
              label={"Email"}
              {...register("email", {
                required: {
                  value: true,
                  message: "Eamil is required",
                },
              })}
              disabled={!!getEmailfromUrl(nextUrl || "")?.length}
              type="email"
              placeholder="Enter"
              className="border-solid border-2 border-indigo-600"
            />
            <CustomInput
              isInvalid={!!errors?.password}
              errorMessage={errors?.password?.message}
              label={"Password"}
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              type="password"
              placeholder="Enter"
              className="border-solid border-2 border-indigo-600"
            />
            <CustomInput
              isInvalid={!!errors?.password}
              errorMessage={errors?.password?.message}
              label={"Repeat Password"}
              {...register("repeat_password", {
                required: {
                  value: true,
                  message: "Repeat Password is required",
                },
              })}
              type="password"
              placeholder="Enter"
              className="border-solid border-2 border-indigo-600"
            />
          </div>
        </section>
        <section id="family" className="px-2 md:px-10 mt-6">
          <div className="mb-4 text-xl ">Family Info</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pl-5 md:pl-20 border-2 border-gray-700 py-10">
            <UserLookup
              control={control as unknown as Control<FieldValues>}
              name="family.father"
              label="Father"
            />
            <UserLookup
              control={control as unknown as Control<FieldValues>}
              name="family.mother"
              label="Mother"
            />

            {isFemale ? (
              <UserLookup
                control={control as unknown as Control<FieldValues>}
                name="family.husband"
                label="Husband"
              />
            ) : (
              <UserLookup
                control={control as unknown as Control<FieldValues>}
                name="family.wife"
                label="Wife"
              />
            )}

            {fields?.map((child, index) => {
              return (
                <div key={child.id}>
                  <UserLookup
                    control={control as unknown as Control<FieldValues>}
                    name={`family.children.${index}.name`}
                    label={`child-${index}`}
                  />
                </div>
              );
            })}
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  append({} as any);
                }}
              >
                Add child
              </button>
            </div>
          </div>
        </section>

        <SubmitButton isLoading={isSubmitting} />
      </form>
    </div>
  );
}

export default SignUp;
