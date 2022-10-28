import { CardState, DataPatching, HomeCountry } from "../types";

import StateCard from "../components/StateCard";
import PatchingButton from "../components/PatchingButton";
import { stateCardFormat } from "../utils/helpers";

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
  const statesCard = countries.map((country: HomeCountry) =>
    stateCardFormat(country)
  );

  return (
    <section>
      {countries.length ? (
        <>
          <div className="grid mb-10 gap-20 md:gap-10 grid-cols-[minmax(0,528px)] md:grid-cols-[repeat(auto-fill,minmax(264px,1fr))] justify-center md:justify-start">
            {statesCard.map(
              ({ name, population, region, capital, flags }: CardState) => (
                <StateCard
                  key={name}
                  name={name}
                  population={population.toLocaleString()}
                  region={region}
                  capital={capital}
                  flags={flags}
                />
              )
            )}
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
