import { LoginData, LoginResponse } from "@/types/login";
import api from "@/utils/api";

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
  } catch (error) {
    console.error("ERROR_LOGIN", error);
    onError?.(error);
  }
};
