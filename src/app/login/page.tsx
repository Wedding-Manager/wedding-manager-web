"use client";
import SubmitButton, { SignupButton } from "@/components/button";
import CustomInput from "@/components/input";
import { handleLoginSubmit } from "@/stores/login";
import { LoginData, LoginResponse } from "@/types/login";
import React, { Ref, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import { PopupActions } from "reactjs-popup/dist/types";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>();
  const [userData, setUserData] = useState<LoginResponse>();
  const loginInfoPopup = useRef();
  const openTooltip = () => (loginInfoPopup!.current! as any).open();

  return (
    <div>
      <Popup ref={loginInfoPopup as unknown as Ref<PopupActions>}>
        <div>{`Welcome Back ${userData?.name}`}</div>
      </Popup>

      <form
        onSubmit={handleSubmit((_) =>
          handleLoginSubmit(_, {
            onSuccess: (data) => {
              console.log("TEST");
              setUserData(data);
              openTooltip();
            },
          })
        )}
      >
        <CustomInput
          isInvalid={!!errors?.user_id}
          errorMessage={errors?.user_id?.message}
          label={"User ID"}
          {...register("user_id", {
            required: {
              value: true,
              message: "User ID is required",
            },
          })}
          placeholder="enter Email/Mobile"
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
          placeholder="enter Password"
          className="border-solid border-2 border-indigo-600"
        />
        <div className="flex items-centers gap-2">
          <SubmitButton label="Login" />
          <SignupButton />
        </div>
      </form>
    </div>
  );
}

export default Login;
