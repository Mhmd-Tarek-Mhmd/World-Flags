import { Routes, Route } from "react-router-dom";
import { ele, DataPatching, HomeCountry, DetailState } from "../types";

import Home from "./Home";
import State from "./State";

interface Props extends DataPatching {
  countries: HomeCountry[];
  data: DetailState[];
}

function Screens({
  data,
  countries,
  chunks,
  patchNum,
  setPatchNum,
  isFilter,
}: Props): ele {
  return (
    <Routes>
      <Route
        index
        element={
          <Home
            countries={countries}
            chunks={chunks}
            patchNum={patchNum}
            setPatchNum={setPatchNum}
            isFilter={isFilter}
          />
        }
      />

      <Route path="/:name" element={<State states={data} />} />
    </Routes>
  );
}

export default Screens;
