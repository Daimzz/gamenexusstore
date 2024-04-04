export const getServerData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Problem with server connection or data");
  }
  const data = await response.json();
  return data;
};
