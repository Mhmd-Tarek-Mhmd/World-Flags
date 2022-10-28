import { Routes, Route } from "react-router-dom";
import { ele, func, str } from "../types";

import SearchBar from "../components/SearchBar";
import FilterBox from "../components/FilterBox";
import BackButton from "../components/BackButton";

interface Props {
  regions: str[];
  handleNameSearch: func;
  handleRegionFilter: func;
}

function Nav({ regions, handleNameSearch, handleRegionFilter }: Props): ele {
  return (
    <nav>
      <div className="container ">
        <Routes>
          <Route
            index
            element={
              <HomeNav
                regions={regions}
                handleNameSearch={handleNameSearch}
                handleRegionFilter={handleRegionFilter}
              />
            }
          />

          <Route path="/:name" element={<StateNav />} />
        </Routes>
      </div>
    </nav>
  );
}

export default Nav;

const HomeNav = ({
  regions,
  handleNameSearch,
  handleRegionFilter,
}: Props): ele => (
  <div className="text-2xl md:text-sm pt-12 pb-16 md:pb-12 flex flex-wrap gap-20 md:gap-0 md:justify-between">
    <SearchBar handleNameSearch={handleNameSearch} />
    <FilterBox regions={regions} handleRegionFilter={handleRegionFilter} />
  </div>
);
const StateNav = (): ele => (
  <div className="text-[27px] md:text-base pt-20 pb-32 md:pb-20">
    <BackButton />
  </div>
);
