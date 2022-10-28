import { ele, str, func, divEle } from "../../types";

interface Props {
  id: str;
  region: str;
  handleClick: func;
}

function Option({ id, region, handleClick }: Props): ele {
  return (
    <div
      role="option"
      id={id}
      aria-selected="false"
      onClick={(e) => handleClick(e.target as divEle)}
      className="w-full flex items-center px-[50px] md:px-[25px] hover:bg-gray-100 dark:hover:bg-gray-600 cursor-default capitalize font-light"
    >
      {region}
    </div>
  );
}

export default Option;
