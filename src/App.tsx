import { useState, useEffect } from "react";

import { useFetch, useChunks } from "./hooks";

import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Nav from "./layouts/Nav";

type Name = { name: { common: string } };
const sortCountriesByCommonName = (data: []) =>
  data.sort((a: Name, b: Name) => a.name.common.localeCompare(b.name.common));

function App(): JSX.Element {
  const data = useFetch(
    "https://restcountries.com/v3.1/all",
    "countries",
    sortCountriesByCommonName
  );
  const chunks = useChunks(data, 25);
  const [patchNum, setPatchNum] = useState<number>(0);
  const [countries, setCountries] = useState<null | []>(null);
  const [FilterData, setFilterData] = useState<null | []>(null);
  const [isFilterSearch, setIsFilterSearch] = useState<boolean>(false);

  // Helpers
  const handleNameSearch = (name: string) => {
    if (name) {
      type Obj = { name: { common: string } };
      const arr: [] = FilterData ? FilterData : data;
      const searchedData = arr.filter((obj: Obj) =>
        obj.name.common.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      ) as [];

      setIsFilterSearch(true);
      setCountries(searchedData);
    } else {
      setIsFilterSearch(false);
    }
  };
  const handleRegionFilter = (region: string) => {
    if (region) {
      type Obj = { region: string };
      const filteredData = data.filter(
        (obj: Obj) => obj.region === region
      ) as [];

      setIsFilterSearch(true);
      setFilterData(filteredData);
      setCountries(filteredData);
    } else {
      setIsFilterSearch(false);
    }
  };

  // Handle shown countries
  useEffect((): void => {
    if (chunks.length && !isFilterSearch) {
      const countries: {}[] = [];
      for (let i = 0; i <= patchNum; i++) {
        countries.push(...(chunks[i] as {}[]));
      }

      setCountries(countries as []);
    }
  }, [chunks, patchNum, isFilterSearch]);

  return (
    <>
      <Header />
      {data && (
        <Nav
          handleNameSearch={handleNameSearch}
          handleRegionFilter={handleRegionFilter}
          regions={[
            ...new Set(data.map((obj: { region: string }) => obj.region)),
          ]}
        />
      )}
    </>
  );
}

export default App;
