import { globalStoreType } from "@/types/global";
import { create } from "zustand";

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
