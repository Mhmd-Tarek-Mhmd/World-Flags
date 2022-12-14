import { useState, useEffect } from "react";
import { ele, str, submitEve, changeEve, func } from "../types";

import SvgIcon from "./SvgIcon";

interface Props {
  handleNameSearch: func;
}

function SearchBar({ handleNameSearch }: Props): ele {
  const [value, setValue] = useState<str>("");

  useEffect(() => handleNameSearch(value), [value]);

  return (
    <form
      role="search"
      onSubmit={(e: submitEve): void => e.preventDefault()}
      className="bg rounded-md overflow-hidden shadow-sm w-full md:w-[480px] h-24 md:h-14 pl-16 md:pl-7 flex items-center gap-[54px] md:gap-6"
    >
      <SvgIcon className="scale-125 md:scale-75">
        <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
      </SvgIcon>

      <label className="h-full flex-1">
        <span className="sr-only">Search for a country</span>
        <input
          type="search"
          value={value}
          placeholder="Search for a country..."
          onChange={(e: changeEve): void => setValue(e.target.value)}
          className="bg w-full h-full pr-5 outline-none placeholder-inherit placeholder:font-light"
        />
      </label>
    </form>
  );
}

export default SearchBar;
