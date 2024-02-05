import { cookies } from "next/headers";
import { Invitation } from "@/types/invitation";
import api from "@/utils/api";
import { getAuthCookie } from "@/utils/cookies";

export const getMyInvitations = async (): Promise<Invitation | any> => {
  const invitationEndpoint = `/v1/invitation`;
  const authCookie = getAuthCookie();
  try {
    const invitationRequest = await api({ authCookie }).get(invitationEndpoint);
    return invitationRequest?.data;
  } catch (err) {
    return err;
  }
};
