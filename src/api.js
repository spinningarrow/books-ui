const API_HOST = process.env.REACT_APP_API_HOST || "http://localhost:3000";

export const listBooks = async () => {
  const response = await fetch(`${API_HOST}/books`);
  return await response.json();
};
