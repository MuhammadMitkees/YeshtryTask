export const BASE_URL = "https://jsonplaceholder.typicode.com/";
export const fetchData = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
