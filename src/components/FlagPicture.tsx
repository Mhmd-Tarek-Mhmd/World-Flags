import { ele, Flags, str } from "../types";

interface Props extends Flags {
  name: str;
}

function FlagPicture({ flags, name }: Props): ele {
  return (
    <picture className="w-full h-full">
      <source srcSet={flags.svg} type="image/svg+xml" />
      <img
        src={flags.png}
        alt={`Flag of ${name}`}
        className="w-full h-full object-cover"
      />
    </picture>
  );
}

export default FlagPicture;
