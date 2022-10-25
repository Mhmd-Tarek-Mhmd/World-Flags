export type FlagsType = { svg: string; png: string };

function FlagPicture(props: { flags: FlagsType; name: string }): JSX.Element {
  return (
    <picture className="w-full h-full">
      <source srcSet={props.flags.svg} type="image/svg+xml" />
      <img
        src={props.flags?.png}
        alt={`Flag of ${props.name}`}
        className="w-full h-full object-cover"
      />
    </picture>
  );
}

export default FlagPicture;
