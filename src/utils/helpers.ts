import { HomeCountry, CardState, Name, num, obj, str } from "../types";

export const toCamelCase = (str: str): str =>
  str.toLowerCase().replaceAll(" ", "-");

export const sortCountriesByCommonName = (data: []): obj[] =>
  data.sort(
    (a: Name, b: Name): num => a.name.common.localeCompare(b.name.common)
  );

export function stateCardFormat({
  name,
  flags,
  region,
  capital,
  population,
}: HomeCountry): CardState {
  return {
    name: name.common,
    flags,
    region,
    population: population.toLocaleString(),
    capital: capital ? capital[0] : "Unknown",
  };
}
