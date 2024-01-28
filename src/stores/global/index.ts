import { User, GlobalStoreType, FetchUsersByQuery } from "@/types/global";
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

export const fetchUsersByQuery = async (
  args: FetchUsersByQuery
): Promise<User[]> => {
  const { searchInput } = args;
  try {
    const request = await api().get(`/v1/user/lookup?q=${searchInput}`);
    return request?.data;
  } catch (err) {
    throw err;
  }
};

export const useGlobalStore = create<GlobalStoreType>((set) => {
  return {
    isNavbarMenuOpen: false,
    setIsNavbarMenuOpen: (isOpen) => {
      set({ isNavbarMenuOpen: isOpen });
    },
    userId: "",
    userName: "",
    userRole: "",
    setUser: (data) => {
      set(() => ({ ...(data || {}) }));
    },
  };
});
