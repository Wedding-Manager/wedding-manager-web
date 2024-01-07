import { User, globalStoreType } from "@/types/global";
import { MyWeddingData, WeddingFormData } from "@/types/weddings";
import api from "@/utils/api";
import { getAuthCookie } from "@/utils/cookies";
import { create } from "zustand";
export const weddingSubmitHandler = async (data: WeddingFormData) => {
  const weddingEndpoint = `/v1/weddings`;
  const payload = {
    ...data,
    groom: data?.groom?.data?._id,
    bribe: data?.bribe?.data?._id,
    photo_gallery: data?.photo_gallery?.map((p) => {
      const { id, ...rest } = p;
      return { ...(rest || {}) };
    }),
  };
  try {
    const authCookie = getAuthCookie();
    const weddingRequest = await api({ authCookie }).post(
      weddingEndpoint,
      payload
    );
    return weddingRequest?.data;
  } catch {
    return new Promise((resolve) => {
      resolve({} as unknown as User);
    });
  }
};

export const fetchMyWeddings = async (
  authCookie: any
): Promise<MyWeddingData[]> => {
  const weddingsEndpoint = `/v1/weddings/my-weddings`;

  try {
    const weddingRequest = await api({ authCookie }).get(weddingsEndpoint);

    return weddingRequest?.data;
  } catch {
    return new Promise((resolve) => {
      resolve([] as unknown as MyWeddingData[]);
    });
  }
};
export const fetchPublicWeddings = async (
  authCookie: any
): Promise<MyWeddingData[]> => {
  const weddingsEndpoint = `/v1/weddings/public`;

  try {
    const weddingRequest = await api({ authCookie }).get(weddingsEndpoint);

    return weddingRequest?.data;
  } catch {
    return new Promise((resolve) => {
      resolve([] as unknown as MyWeddingData[]);
    });
  }
};

export const useWeddingsStore = create<globalStoreType>((set) => {
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
