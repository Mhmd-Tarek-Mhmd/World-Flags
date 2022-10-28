import {
  str,
  ele,
  func,
  bool,
  divRef,
  divOrNull,
  strOrNull,
  mouseHandler,
  keyboardHandler,
  num,
} from "../../types";

import Option from "./Option";
import ListBox from "./ListBox";
import ArrowsIcon from "./ArrowsIcon";

interface Props {
  isExpanded: bool;
  visualFocusedOption: divOrNull;
  activeOption: divOrNull;
  listbox: divRef;
  handleClick: mouseHandler;
  handleKeyDown: keyboardHandler;
  chooseOption: func;
  regions: str[];
}

function ComboBox({
  isExpanded,
  activeOption,
  handleClick,
  handleKeyDown,
  chooseOption,
  listbox,
  regions,
}: Props): ele {
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
          (region: str, i: num): ele => (
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

const Placeholder = (props: { optionName: strOrNull }): ele => (
  <label id="combobox-label" className="font-light">
    {props.optionName ? (
      <span className="capitalize">{props.optionName}</span>
    ) : (
      "Filter by Region"
    )}
  </label>
);
