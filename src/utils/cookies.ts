export const buildCookie = (cookie: { name: string; value: string }) => {
  const cookieParts = [];
  const maxAge = 31536000000;
  cookieParts.push(`${cookie.name}=${cookie.value}`);
  cookieParts.push("Path=/");

  cookieParts.push(`Max-Age=${maxAge}`);

  const timestamp = new Date();
  timestamp.setHours(timestamp.getHours() + maxAge / 3600);
  cookieParts.push(`Expires=${timestamp.toUTCString()}`);

  return cookieParts.join("; ");
};
