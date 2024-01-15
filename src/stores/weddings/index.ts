import { User, GlobalStoreType } from "@/types/global";
import {
  Invitation,
  InvitationStatus,
  MyWeddingData,
  WeddingFormData,
} from "@/types/weddings";
import api from "@/utils/api";
import { getAuthCookie } from "@/utils/cookies";
import { create } from "zustand";
export const weddingSubmitHandler = async (
  data: WeddingFormData,
  onSave?: (wedding: { wedding: MyWeddingData }) => void
) => {
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
    return onSave ? onSave(weddingRequest?.data) : weddingRequest?.data;
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

export const fetchWeddingById = async (
  id: string,
  config: { authCookie: any }
): Promise<MyWeddingData> => {
  try {
    const weddingEndpoint = `/v1/weddings/my-wedding/${id}`;
    const weddingRequest = await api({ authCookie: config?.authCookie }).get(
      weddingEndpoint
    );
    return weddingRequest?.data;
  } catch (err) {
    return new Promise((resolve) => {
      resolve({} as unknown as MyWeddingData);
    });
  }
};

export const fetchInvitations = async (
  weddingId: string
): Promise<Invitation[]> => {
  const guestEndpoint = `/v1/invitation/wedding/${weddingId}/guests`;
  try {
    const authCookie = getAuthCookie();
    const guestsRequest = await api({ authCookie }).get(guestEndpoint);
    return guestsRequest?.data as Invitation[];
  } catch (err) {
    console.log("ERROR", err);
    return [];
  }
};

export const fetchUserWeddingStatus = async (config: {
  weddingId: String;
  query: string;
  authCookie: any;
}) => {
  const { weddingId, query, authCookie } = config;
  const invitationEndpoint = `/v1/invitation/wedding/${weddingId}/guests/status?${query}`;
  try {
    const statusReq = await api({ authCookie }).get(invitationEndpoint);
    return statusReq?.data;
  } catch {
    return [];
  }
};

export const upadateTheInvitationStatus = async (args: {
  weddingId: string;
  payload: { status: InvitationStatus; reason?: string };
}): Promise<any> => {
  const { weddingId, payload } = args;
  const authCookie = getAuthCookie();
  const invitationStatusEndpoint = `/v1/invitation/wedding/${weddingId}/guests/status`;
  try {
    const request = await api({ authCookie }).post(
      invitationStatusEndpoint,
      payload
    );
    return request?.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postInvitation = async (weddingContext: {
  weddingId: string;
  data: {
    email?: string;
    guest?: { label: string; value: string; data: User };
  };
}) => {
  const { data, weddingId } = weddingContext;
  const payload = {
    wedding_id: weddingId,
    ...(data?.guest
      ? { guest_id: data?.guest?.data?._id }
      : { email: data?.email }),
  };
  try {
    const invitationEndpoint = `/v1/invitation`;
    const authCookie = getAuthCookie();
    const invitationReq = await api({ authCookie }).post(
      invitationEndpoint,
      payload
    );
    return invitationReq?.data;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
};

export const useWeddingsStore = create<GlobalStoreType>((set) => {
  return {
    isNavbarMenuOpen: false,
    setIsNavbarMenuOpen: () => {
      console.log("TEST");
    },
    userId: "",
    userName: "",
    userRole: "",
    setUser: (data) => {
      set(() => ({ ...(data || {}) }));
    },
  };
});
