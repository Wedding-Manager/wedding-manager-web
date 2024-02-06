import { LoginData, LoginResponse } from "@/types/login";
import { UserData } from "@/types/signup";
import api from "@/utils/api";
import { BaseSyntheticEvent } from "react";

export const handleLoginSubmit = async (
  data: LoginData,
  onResponse?: {
    onSuccess?: (data: LoginResponse) => void;
    onError?: (data: any) => void;
  }
) => {
  const { onSuccess, onError } = onResponse || {};
  try {
    const loginEndpoint = `/api/login`;
    const loginRequest = await api({ internal: true }).post(loginEndpoint, {
      ...data,
    });
    onSuccess?.(loginRequest?.data);
  } catch (error: any) {
    onError?.(error);
  }
};

export const handleSignUpSubmit = async (
  data: UserData,
  onResponse?: {
    onSuccess?: (data: LoginResponse) => void;
    onError?: (data: any) => void;
  }
) => {
  const { onSuccess, onError } = onResponse || {};
  const payload = {
    ...data,
    gender: data?.gender?.value,
    family: {
      husband: data?.family?.husband?.value,
      father: data?.family?.father?.value,
      mother: data?.family?.mother?.value,
      wife: data?.family?.wife?.value,
      children: data?.family?.children?.map((c) => c?.value),
    },
  };
  const endpoint = `/api/signup`;
  try {
    const signupRequest = await api({ internal: true }).post(endpoint, payload);
    onSuccess?.(signupRequest?.data);
  } catch (error) {
    onError?.(error);
  }
};
