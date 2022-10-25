type OptionProps = {
  id: string;
  region: string;
  handleClick: Function;
};

function Option({ id, region, handleClick }: OptionProps): JSX.Element {
  return (
    <div
      role="option"
      id={id}
      aria-selected="false"
      onClick={(e) => handleClick(e.target as HTMLDivElement)}
      className="w-full h-1/5 flex items-center pl-[50px] md:pl-[25px] hover:bg-gray-100 dark:hover:bg-gray-600 cursor-default capitalize font-light"
    >
      {region}
    </div>
  );
}

export default Option;
