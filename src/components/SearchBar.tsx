import React from "react";

import SvgIcon from "./SvgIcon";

interface Props extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  rootClassName: string;
}

function SearchBar(props: Props) {
  return (
    <form
      role="search"
      onSubmit={(e: React.SyntheticEvent): void => e.preventDefault()}
      className={
        "theme-field shadow-sm pl-6 md:pl-7 flex items-center gap-3 " +
          props?.rootClassName || ""
      }
    >
      <SvgIcon className="scale-50">
        <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
      </SvgIcon>

      <label className="h-full flex-1">
        <span className="sr-only">Search for a country</span>
        <input
          type="search"
          className="theme-field w-full h-full pr-5 outline-none placeholder-inherit placeholder:font-light"
          {...props}
        />
      </label>
    </form>
  );
}

export default SearchBar;
