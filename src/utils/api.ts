import { config } from "./../middleware";
import axios, { AxiosRequestConfig } from "axios";
import { isBrowser } from "./run-time";

const BASE_URL = process.env.BACKEND_BASE_URL;
const getAbsoluteUrl = (config: AxiosRequestConfig): string => {
  const url =
    config.url?.startsWith("http://") || config.url?.startsWith("https://")
      ? config.url
      : `${config.baseURL || ""}${config.url}`;
  return url;
};

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

  apiInstant.interceptors.response.use(
    (response) => {
      const url = getAbsoluteUrl(response?.config);
      const resposeInfo = {
        url,
        method: response.config.method?.toUpperCase(),
        status: response.status,
      };
      console.log(resposeInfo);
      return response;
    },
    async (error) => {
      if (error?.response?.data?.errorMessage)
        return Promise.reject({ ...(error?.response?.data || {}) });
      if (axios?.isAxiosError(error)) {
        const formatedError = {
          baseUrl: error?.config?.baseURL,
          url: error?.config?.url,
          page: isBrowser() ? window?.location?.href : "UNKNOWN",
          method: error?.config?.method?.toUpperCase() || "UNKNOWN",
          errorName: error.name,
          errorMessage: error.message,
          errorCode: error.code || null,
          requestBody: JSON.stringify(error?.config?.data || ""),
          responseBody: JSON.stringify(error?.response?.data || ""),
          responseStatus: error.response?.status || "UNKNOWN",
        };
        console.log(formatedError);
      }

      return Promise.reject({
        errorMessage: JSON.stringify(error?.response?.data || ""),
        baseUrl: error?.config?.baseURL,
        url: error?.config?.url,
        method: error?.config?.method?.toUpperCase() || "UNKNOWN",
        status: error.response?.status,
      });
    }
  );

  return apiInstant;
}
