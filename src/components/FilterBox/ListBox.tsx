import { LegacyRef } from "react";

type ListBoxProps = {
  isExpanded: boolean;
  children: JSX.Element[];
  listbox: LegacyRef<HTMLDivElement>;
};

function ListBox({ isExpanded, children, listbox }: ListBoxProps): JSX.Element {
  return (
    <div
      ref={listbox}
      hidden={!isExpanded}
      role="listbox"
      id="listbox"
      tabIndex={-1}
      aria-labelledby="combobox-label"
      className="bg shadow-sm rounded-md w-full py-10 md:py-5 z-10 absolute left-0 top-[calc(100%+8px)] md:top-[calc(100%+4px)] [&:not([hidden])]:grid auto-rows-[40px] md:auto-rows-[24px]"
    >
      {children}
    </div>
  );
}

export default ListBox;
