import { func, obj } from "./other";
import { bool, num, str } from "./primitives";

export type Flags = {
  flags: { svg: str; png: str };
};
export type Name = {
  name: { common: str };
};
export type Region = {
  region: str;
};
export type Capital = {
  capital: str[] | undefined;
};
export type Population = {
  population: num;
};

export interface HomeCountry extends Name, Flags, Region, Capital, Population {}
export interface CardState extends Flags, Region {
  name: str;
  capital: str;
  population: str;
}
export interface DataPatching {
  chunks: obj[];
  patchNum: num;
  isFilter: bool;
  setPatchNum: func;
}

export interface DetailState extends Flags, Capital, Population, Region {
  tld: [];
  cca3: str;
  borders: [];
  languages: {};
  currencies: {};
  subregion: str;
  name: { common: str; nativeName: { common: str } };
}
export interface DetailStateFormat extends Flags, Region {
  tld: str;
  borders: [];
  capital: str;
  subregion: str;
  languages: str;
  population: str;
  currencies: str;
  nativeName: str;
  commonName: str;
}
