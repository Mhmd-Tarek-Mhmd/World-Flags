import { ele, num, obj, str } from "../types";

interface Props {
  items: obj[];
}

function Items({ items }: Props): ele {
  const keys: str[] = items.map((item: {}) => Object.keys(item)).flat();

  return (
    <ul className="grid gap-y-3 md:gap-y-1">
      {keys.map(
        (key: str, i: num): ele => (
          <Item key={key} name={key} val={Object.values(items[i])[0] as str} />
        )
      )}
    </ul>
  );
}

export default Items;

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
