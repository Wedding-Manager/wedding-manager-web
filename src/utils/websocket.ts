import { getAuthCookie } from "./cookies";

const pathUrl = (params: { url: string }) => {
  const nodeEnv = process.env.NODE_ENV;
  const { url } = params;

  switch (nodeEnv) {
    case "development": {
      return `ws://localhost:2000${url}`;
    }
    case "production": {
      return `wss://wedding-manager.onrender.com${url}`;
    }
    default:
      return `wss://wedding-manager.onrender.com${url}`;
  }
};

const webSocket = (params: {
  query: { [key: string]: string };
  url: string;
}) => {
  const { query, url } = params;
  const authToken = getAuthCookie();
  const queryString = new URLSearchParams({
    ...query,
    Auth: authToken,
  }).toString();
  const basePath = pathUrl({ url });
  const webSocketInstant = new WebSocket(`${basePath}?${queryString}`, []);
  return webSocketInstant;
};

export default webSocket;
