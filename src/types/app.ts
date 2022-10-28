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
export interface DataPatching {
  chunks: obj[];
  patchNum: num;
  isFilter: bool;
  setPatchNum: func;
}
