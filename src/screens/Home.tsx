import { DataPatching, HomeCountry } from "../types";

import StateCard from "../components/StateCard";
import PatchingButton from "../components/PatchingButton";

interface HomeProps extends DataPatching {
  countries: HomeCountry[];
}

function Home({
  countries,
  chunks,
  patchNum,
  setPatchNum,
  isFilter,
}: HomeProps) {
  return (
    <section>
      {countries.length ? (
        <>
          <div className="grid mb-10 gap-20 md:gap-10 grid-cols-[minmax(0,528px)] md:grid-cols-[repeat(auto-fill,minmax(264px,1fr))] justify-center md:justify-start">
            {countries.map((country) => (
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

          <PatchingButton
            chunks={chunks}
            patchNum={patchNum}
            setPatchNum={setPatchNum}
            isFilter={isFilter}
          />
        </>
      ) : (
        <p role="alert" className="text-center">
          No countries found
        </p>
      )}
    </section>
  );
}

export default Home;
