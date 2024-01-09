export const getEmailfromUrl = (url: string) => {
  // Extract the query string from the URL
  const queryString = url.split("?")[1];
  // Parse the query string into an object
  const params = new URLSearchParams(queryString);
  const guestEmail = params.get("guest_email");

  // Decode the email parameter
  const decodedEmail = decodeURIComponent(guestEmail || "");
  return decodedEmail;
};
