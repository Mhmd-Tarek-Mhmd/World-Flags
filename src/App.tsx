import { useState } from "react";

import useFetch from "./hooks/useFetch";

import Header from "./layouts/Header";
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
  const [countries, setCountries] = useState<[]>(data);

  return (
    <>
      <Header />
      {data && <Nav data={data} setCountries={setCountries} />}
    </>
  );
}

export default App;
