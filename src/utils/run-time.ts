import { parseCookies } from "nookies";

export const isBrowser = () => {
  return typeof window !== undefined;
};

export const isLogedIn = () => {
  const cookies = parseCookies();
  return !!cookies[`${process.env.ACCESS_TOKEN_KEY}`];
};
