import {
  HomeCountry,
  CardState,
  Name,
  num,
  obj,
  str,
  DetailState,
  DetailStateFormat,
} from "../types";

export const toCamelCase = (str: str): str =>
  str.toLowerCase().replaceAll(" ", "-");

export const sortCountriesByCommonName = (data: []): obj[] =>
  data.sort(
    (a: Name, b: Name): num => a.name.common.localeCompare(b.name.common)
  );

export const uniqueArr = (arr: str[]): str[] => [...new Set(arr)];

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

export function detailStateFormat({
  tld,
  name,
  flags,
  region,
  capital,
  borders,
  languages,
  subregion,
  population,
  currencies,
}: DetailState): DetailStateFormat {
  const getStrValues = (obj: {}, prop: str): str => {
    const values: obj[] = Object.values(obj);
    const arr: str[] = values.map(
      (val: { [prop: str]: str }): str => val[prop]
    );
    return uniqueArr(arr).join(", ");
  };

  return {
    flags,
    region,
    borders,
    subregion,
    commonName: name.common,
    tld: uniqueArr(tld).join(", "),
    population: population.toLocaleString(),
    currencies: getStrValues(currencies, "name"),
    nativeName: getStrValues(name.nativeName, "common"),
    languages: uniqueArr(Object.values(languages)).join(", "),
    capital: capital ? uniqueArr(capital).join(", ") : "Unknown",
  };
}
