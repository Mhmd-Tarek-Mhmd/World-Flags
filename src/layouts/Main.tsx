import { DataPatching, HomeCountry, ele } from "../types";

import Screens from "../screens";

interface MainProps extends DataPatching {
  countries: HomeCountry[];
}

function Main({
  countries,
  chunks,
  patchNum,
  setPatchNum,
  isFilter,
}: MainProps): ele {
  return (
    <main>
      <div className="container pb-10">
        <Screens
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
