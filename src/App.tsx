import { useState, useEffect } from "react";
import { useFetch, useChunks } from "./hooks";
import { bool, num, Name, obj, ele, str, Region, arrOrNull } from "./types";

import Nav from "./layouts/Nav";
import Main from "./layouts/Main";
import Header from "./layouts/Header";

const sortCountriesByCommonName = (data: []): obj[] =>
  data.sort(
    (a: Name, b: Name): num => a.name.common.localeCompare(b.name.common)
  );

function App(): ele {
  const data: [] = useFetch(
    "https://restcountries.com/v3.1/all",
    "countries",
    sortCountriesByCommonName
  );
  const chunks: obj[] = useChunks(data, 25);
  const [patchNum, setPatchNum] = useState<num>(0);
  const [countries, setCountries] = useState<arrOrNull>(null);
  const [FilterData, setFilterData] = useState<arrOrNull>(null);
  const [isFilterSearch, setIsFilterSearch] = useState<bool>(false);

  // Helpers
  const handleNameSearch = (name: str): void => {
    if (name) {
      const arr: [] = FilterData ? FilterData : data;
      const searchedData: obj[] = arr.filter((obj: Name): {} =>
        obj.name.common.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      );

      setIsFilterSearch(true);
      setCountries(searchedData as []);
    } else {
      setIsFilterSearch(false);
    }
  };
  const handleRegionFilter = (region: str): void => {
    if (region) {
      const filteredData: obj[] = data.filter(
        (obj: Region) => obj.region === region
      );

      setIsFilterSearch(true);
      setFilterData(filteredData as []);
      setCountries(filteredData as []);
    } else {
      setIsFilterSearch(false);
    }
  };

  // Handle shown countries
  useEffect((): void => {
    if (chunks?.length && !isFilterSearch) {
      const countries: obj[] = [];

      for (let i: num = 0; i <= patchNum; i++) {
        countries.push(...(chunks[i] as obj[]));
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
          regions={[...new Set(data.map((obj: Region) => obj.region))]}
        />
      )}
      {countries && (
        <Main
          patchNum={patchNum}
          chunks={chunks as []}
          setPatchNum={setPatchNum}
          countries={countries as []}
          isFilter={Boolean(FilterData)}
        />
      )}
    </>
  );
}

export default App;
