import { DataPatching, HomeCountry, ele, DetailState } from "../types";

import Screens from "../screens";

interface MainProps extends DataPatching {
  countries: HomeCountry[];
  data: DetailState[];
}

function Main({
  data,
  countries,
  chunks,
  patchNum,
  setPatchNum,
  isFilter,
}: MainProps): ele {
  return (
    <main>
      <div className="container pb-10 md:pb-20">
        <Screens
          data={data}
          countries={countries}
          chunks={chunks}
          patchNum={patchNum}
          setPatchNum={setPatchNum}
          isFilter={isFilter}
        />
      </div>
    </main>
  );
}

export default Main;
