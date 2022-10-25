import { LegacyRef, KeyboardEventHandler, MouseEventHandler } from "react";

import Option from "./Option";
import ListBox from "./ListBox";
import ArrowsIcon from "./ArrowsIcon";

export type OptionType = HTMLDivElement | null;
type ComboBoxProps = {
  isExpanded: boolean;
  visualFocusedOption: OptionType;
  activeOption: OptionType;
  listbox: LegacyRef<HTMLDivElement>;
  handleClick: MouseEventHandler;
  handleKeyDown: KeyboardEventHandler;
  chooseOption: Function;
  regions: string[];
};

function ComboBox({
  isExpanded,
  activeOption,
  handleClick,
  handleKeyDown,
  chooseOption,
  listbox,
  regions,
}: ComboBoxProps): JSX.Element {
  return (
    <div
      role="combobox"
      aria-controls="listbox"
      aria-expanded={isExpanded}
      aria-haspopup="listbox"
      aria-labelledby="combobox-label"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="bg rounded-md shadow-sm max-w-full w-[400px] h-24 md:w-[200px] md:h-14 pl-[50px] md:pl-[25px] pr-10 md:pr-[19px] relative flex items-center justify-between cursor-default"
    >
      <Placeholder optionName={activeOption && activeOption.innerHTML} />

      <ListBox isExpanded={isExpanded} listbox={listbox}>
        {regions.map(
          (region, i): JSX.Element => (
            <Option
              key={region}
              region={region}
              id={`option-${i}`}
              aria-selected="false"
              handleClick={chooseOption}
            />
          )
        )}
      </ListBox>

      <ArrowsIcon isExpanded={isExpanded} />
    </div>
  );
}

export default ComboBox;

const Placeholder = (props: { optionName: string | null }): JSX.Element => (
  <label id="combobox-label" className="font-light">
    {props.optionName ? (
      <span className="capitalize">{props.optionName}</span>
    ) : (
      "Filter by Region"
    )}
  </label>
);
