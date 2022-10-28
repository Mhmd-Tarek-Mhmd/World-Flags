import { useParams, Link } from "react-router-dom";
import {
  ele,
  str,
  Name,
  DetailStateFormat,
  DetailState,
  num,
  bool,
} from "../types";
import { detailStateFormat, toCamelCase } from "../utils/helpers";

import FlagPicture from "../components/FlagPicture";
import Items from "../components/Items";

interface Props {
  states: DetailState[];
}

function State({ states }: Props): ele {
  const { name } = useParams<{ name: str }>();
  const {
    tld,
    flags,
    region,
    capital,
    borders,
    languages,
    subregion,
    commonName,
    nativeName,
    currencies,
    population,
  }: DetailStateFormat = detailStateFormat(
    states.filter((state: Name) => toCamelCase(state.name.common) === name)[0]
  );

  const neighbors: str[] = states
    .filter(
      (state: { cca3: str }): bool => (borders as str[]).includes(state.cca3)
    )
    .map((state: Name): str => state.name.common);

  return (
    <section>
      <article className="md:grid md:grid-cols-[minmax(0,560px),minmax(0,570px)] md:gap-5 md:justify-between md:items-center">
        <FlagPicture flags={flags} name={commonName} />

        <div className="">
          <h2 className="text-[2.6rem] md:text-3xl mt-[100px] mb-[62px] md:mt-0 md:mb-[38px]">
            {commonName}
          </h2>

          {/* List */}
          <div className="grid md:block md:columns-2 gap-24 md:gap-0 mb-24 md:mb-20 md:justify-between">
            <Items
              items={[
                { "native name": nativeName },
                { population },
                { region },
                { "sub region": subregion },
                { capital },
              ]}
            />
            <Items
              items={[
                { "top level domain": tld },
                { currencies },
                { languages },
              ]}
            />
          </div>

          {/* Borders */}
          <div className="grid md:flex gap-11 md:gap-4">
            <h3 className="text-[1.962rem] md:text-base">Border Countries:</h3>
            <div className="grid gap-5 md:gap-2 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(100px,max-content))] md:flex-1">
              {neighbors &&
                neighbors.map((neighbor: str) => (
                  <Link
                    key={neighbor}
                    to={`/${toCamelCase(neighbor)}`}
                    className="bg shadow-xy-md rounded-md h-14 md:h-7 grid place-items-center hover:scale-105 font-light text-2xl md:text-sm"
                  >
                    {neighbor}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default State;
