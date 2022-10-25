import StateCard from "../components/StateCard";
import { FlagsType } from "../components/FlagPicture";

type CountriesType =
  | []
  | [
      {
        name: { common: string };
        population: number;
        region: string;
        capital: string[] | undefined;
        flags: FlagsType;
      }
    ];
type HomeProps = {
  countries: CountriesType;
};

function Home({ countries }: HomeProps) {
  return (
    <div className="grid gap-20 md:gap-10 grid-cols-[minmax(0,528px)] md:grid-cols-[repeat(auto-fill,minmax(264px,1fr))] justify-center md:justify-start">
      {countries.length &&
        countries.map((country) => (
          <StateCard
            key={country.name.common}
            name={country.name.common}
            population={country.population.toLocaleString()}
            region={country.region}
            capital={country.capital ? country.capital[0] : "Unknown"}
            flags={country.flags}
          />
        ))}
    </div>
  );
}

export default Home;
