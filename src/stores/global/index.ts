import { User, globalStoreType } from "@/types/global";
import api from "@/utils/api";
import { getAuthCookie } from "@/utils/cookies";
import { create } from "zustand";
export const fetchUser = async (): Promise<User> => {
  const userEndpoint = `/v1/user`;
  try {
    const authCookie = getAuthCookie();
    const userRequest = await api({ authCookie }).get(userEndpoint);
    return userRequest?.data;
  } catch {
    return new Promise((resolve) => {
      resolve({} as unknown as User);
    });
  }
};

export const useGlobalStore = create<globalStoreType>((set) => {
  return {
    userId: "",
    userName: "",
    userRole: "",
    setUser: (data) => {
      console.log("data", data);
      set(() => ({ ...(data || {}) }));
    },
  };
});
