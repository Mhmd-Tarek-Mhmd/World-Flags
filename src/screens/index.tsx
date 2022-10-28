import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ele, DataPatching, HomeCountry } from "../types";

import Home from "./Home";

interface Props extends DataPatching {
  countries: HomeCountry[];
}

function Screens({
  countries,
  chunks,
  patchNum,
  setPatchNum,
  isFilter,
}: Props): ele {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default Screens;
