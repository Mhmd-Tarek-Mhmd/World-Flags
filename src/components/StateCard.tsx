import { Link } from "react-router-dom";
import { CardState, ele } from "../types";
import { toCamelCase } from "../utils/helpers";

import Items from "./Items";
import FlagPicture from "./FlagPicture";

interface Props extends CardState {}

function StateCard({ name, population, region, capital, flags }: Props): ele {
  return (
    <article className="bg shadow-md overflow-hidden rounded-md grid grid-rows-[320px,352px] md:grid-rows-[160px,176px]">
      <Link to={`/${toCamelCase(name)}`}>
        <FlagPicture flags={flags} name={name} />

        <div className="px-[50px] md:px-[25px]">
          <h2 className="text-[2.16rem] md:text-[1.08rem] pt-[58px] pb-10 md:pt-[28px] md:pb-[14px]">
            {name}
          </h2>

          <Items items={[{ population }, { region }, { capital }]} />
        </div>
      </Link>
    </article>
  );
}

export default StateCard;
