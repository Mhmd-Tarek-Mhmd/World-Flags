import FlagPicture, { FlagsType } from "./FlagPicture";

type StateCardProps = {
  name: string;
  population: string;
  region: string;
  capital: string;
  flags: FlagsType;
};

function StateCard({
  name,
  population,
  region,
  capital,
  flags,
}: StateCardProps) {
  return (
    <article className="bg shadow-md overflow-hidden rounded-md grid grid-rows-[320px,352px] md:grid-rows-[160px,176px]">
      <FlagPicture flags={flags} name={name} />

      <div className="px-[50px] md:px-[25px]">
        <h2 className="text-[2.16rem] md:text-[1.08rem] pt-[58px] pb-10 md:pt-[28px] md:pb-[14px]">
          {name}
        </h2>

        <Items items={[{ population }, { region }, { capital }]} />
      </div>
    </article>
  );
}

export default StateCard;

const Item = (props: { name: string; val: string }): JSX.Element => (
  <li>
    <span className="capitalize text-[1.725rem] md:text-sm">
      {props.name}:{" "}
    </span>
    <span className="font-light text-[1.7rem] md:text-[0.85rem]">
      {props.val}
    </span>
  </li>
);

const Items = (props: { items: object[] }): JSX.Element => {
  const keys = props.items.map((item: {}) => Object.keys(item));

  return (
    <ul className="grid gap-y-3 md:gap-y-1">
      {keys.map(
        (key: string[], i: number): JSX.Element => (
          <Item
            key={key[0]}
            name={key[0]}
            val={Object.values(props.items[i])[0]}
          />
        )
      )}
    </ul>
  );
};
