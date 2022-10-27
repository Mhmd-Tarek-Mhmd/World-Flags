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

  useEffect((): void => {
    if (chunks.length) {
      const countries: {}[] = [];
      for (let i = 0; i <= patchNum; i++) {
        countries.push(...(chunks[i] as {}[]));
      }

      setCountries(countries as []);
    }
  }, [chunks, patchNum]);

  return (
    <>
      <Header />
      {data && <Nav data={data} setCountries={setCountries} />}
    </>
  );
}

export default App;
