import { parseCookies } from "nookies";

export const isBrowser = () => {
  return typeof window !== "undefined";
};

export const isLogedIn = (cookies?: any) => {
  const clientKookies = parseCookies();
  return isBrowser()
    ? !!clientKookies[`${process.env.ACCESS_TOKEN_KEY}`]
    : !!cookies;
};
