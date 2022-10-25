import BackButton from "../components/BackButton";
import SearchBar from "../components/SearchBar";
import FilterBox from "../components/FilterBox";

type NavProps = {
  data: [];
  setCountries: Function;
};

function Nav({ data, setCountries }: NavProps): JSX.Element {
  return (
    <nav>
      <div className="container ">
        {location.pathname === "/" ? (
          <HomeNav data={data} setCountries={setCountries} />
        ) : (
          <StateNav />
        )}
      </div>
    </nav>
  );
}

export default Nav;

const HomeNav = ({ data, setCountries }: NavProps): JSX.Element => (
  <div className="text-2xl md:text-sm pt-12 pb-16 md:pb-12 flex flex-wrap gap-20 md:gap-0 md:justify-between">
    <SearchBar data={data} setCountries={setCountries} />
    <FilterBox data={data} setCountries={setCountries} />
  </div>
);
const StateNav = (): JSX.Element => (
  <div className="text-[27px] md:text-base pt-20 pb-32 md:pb-20">
    <BackButton />
  </div>
);
