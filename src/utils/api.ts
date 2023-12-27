import axios from "axios";

const BASE_URL = process.env.BACKEND_BASE_URL;

export default function api(apiConfig?: {
  internal?: boolean;
  authCookie?: string;
}) {
  const { internal, authCookie } = apiConfig || {};
  const apiInstant = axios.create({
    withCredentials: false,
    baseURL: internal ? undefined : BASE_URL,
    headers: {
      ...(authCookie ? { "X-Auth-Token": `${authCookie}` } : {}),
    },
  });

  return apiInstant;
}
