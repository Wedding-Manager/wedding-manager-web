const baseUrl = () => {
  const nodeEnv = process.env.NODE_ENV;
  switch (nodeEnv) {
    case "development": {
      return "ws://localhost:2000";
    }
    case "production": {
      return "wss://wedding-manager.onrender.com";
    }
    default:
      return "wss://wedding-manager.onrender.com";
  }
};

const webSocket = (params: { query: { [key: string]: string } }) => {
  const { query } = params;
  const queryString = new URLSearchParams(query).toString();
  const baseURL = baseUrl();
  const webSocketInstant = new WebSocket(`${baseURL}?${queryString}`);
  return webSocketInstant;
};

export default webSocket;
