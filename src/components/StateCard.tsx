import { Link } from "react-router-dom";
import { ele, Flags, num, obj, Region, str } from "../types";

import FlagPicture from "./FlagPicture";

interface Props extends Flags, Region {
  name: str;
  capital: str;
  population: str;
}

function StateCard({ name, population, region, capital, flags }: Props): ele {
  return (
    <article className="bg shadow-md overflow-hidden rounded-md grid grid-rows-[320px,352px] md:grid-rows-[160px,176px]">
      <Link to={`/state/${name.toLowerCase().replaceAll(" ", "-")}`}>
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

const Item = (props: { name: str; val: str }): ele => (
  <li>
    <span className="capitalize text-[1.725rem] md:text-sm">
      {props.name}:{" "}
    </span>
    <span className="font-light text-[1.7rem] md:text-[0.85rem]">
      {props.val}
    </span>
  </li>
);

const Items = (props: { items: obj[] }): ele => {
  const keys: str[] = props.items.map((item: {}) => Object.keys(item)).flat();

  return (
    <ul className="grid gap-y-3 md:gap-y-1">
      {keys.map(
        (key: str, i: num): ele => (
          <Item
            key={key}
            name={key}
            val={Object.values(props.items[i])[0] as str}
          />
        )
      )}
    </ul>
  );
};
