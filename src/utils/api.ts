const BASE_URL = "https://api.restcountries.com/countries/v5";
const AUTH_TOKEN = import.meta.env?.VITE_AUTH_TOKEN;

export const fetchCountries = async (
  limit: number = 100,
  offset: number = 0,
  q: string = "",
  region: string = "",
): Promise<any> => {
  let filters = "";
  if (limit) filters += `?limit=${limit}`;
  if (offset) filters += `${filters?.length ? "&" : "?"}offset=${offset}`;
  if (q) filters += `${filters?.length ? "&" : "?"}q=${q}`;
  if (region) filters += `${filters?.length ? "&" : "?"}region=${region}`;

  try {
    const response = await fetch(`${BASE_URL}${filters}`, {
      headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(message);
  }
};
