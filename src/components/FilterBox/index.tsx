import { useRef, useState, useEffect, useLayoutEffect } from "react";
import {
  str,
  num,
  ele,
  bool,
  func,
  keyEve,
  divEle,
  divOrNull,
} from "../../types";

import ComboBox from "./ComboBox";

interface Props {
  regions: str[];
  handleRegionFilter: func;
}

function FilterBox({ regions, handleRegionFilter }: Props): ele {
  const listbox = useRef<divEle>(null);
  const [isExpanded, setIsExpanded] = useState<bool>(false);
  const [visualFocusIndex, setVisualFocusIndex] = useState<num>(-1);
  const [activeOption, setActiveOption] = useState<divOrNull>(null);
  const [visualFocusedOption, setVisualFocusedOption] =
    useState<divOrNull>(null);

  // Filter logic
  useEffect(() => handleRegionFilter(activeOption?.innerHTML), [activeOption]);

  /*
   * Helpers
   */

  const openByClick = (): void => {
    setIsExpanded(true);
    handleVisualFocusedViews(true);
  };
  const openByKeyboard = (): void => {
    setIsExpanded(true);
    listbox.current &&
      setVisualFocusIndex(
        !activeOption ? 0 : [...listbox.current.children].indexOf(activeOption)
      );
  };

  const nextVisualFocusIndex = (): void => {
    setVisualFocusIndex(
      visualFocusIndex < regions.length - 1 ? visualFocusIndex + 1 : 0
    );
  };
  const prevVisualFocusIndex = (): void => {
    setVisualFocusIndex(
      visualFocusIndex > 0 ? visualFocusIndex - 1 : regions.length - 1
    );
  };

  const handleVisualFocusedViews = (isClean: bool = false): void => {
    if (listbox.current && visualFocusIndex >= 0) {
      const classes: str[] = ["border", "border-1"];
      const prevFocused = listbox.current.querySelector(`.${classes[0]}`);
      const currentFocused = [...listbox.current.children][visualFocusIndex];

      prevFocused?.classList.remove(...classes);
      currentFocused.classList.add(...classes);

      // Clean all visual focus
      isClean && prevFocused?.classList.remove(...classes);
    }
  };

  const chooseOption = (option: divEle): void => {
    setActiveOption(option);
    setVisualFocusedOption(option);
    activeOption && activeOption.setAttribute("aria-selected", "false");
    option.setAttribute("aria-selected", "true");
    setIsExpanded(false);
  };

  /*
   * Keyboard Support
   */

  // Handle keys interactive
  const handleKeyDown = (e: keyEve): void => {
    // [1] Handle opening keys
    const openKeys: str[] = ["Enter", " ", "ArrowDown", "ArrowUp"];
    if (!isExpanded && openKeys.includes(e.key)) openByKeyboard();

    if (isExpanded) {
      // [2] Handle visual focused index keys
      if (e.key === "ArrowDown") nextVisualFocusIndex();
      else if (e.key === "ArrowUp") prevVisualFocusIndex();
      else if (e.key === "Home" || e.key === "PageUp") setVisualFocusIndex(0);
      else if (e.key === "End" || e.key === "PageDown")
        setVisualFocusIndex(regions.length - 1);

      // [3] Handle selecting option keys
      const selectKeys: str[] = ["Enter", "Tab", " "];
      if (selectKeys.includes(e.key) && visualFocusedOption)
        chooseOption(visualFocusedOption);

      // [4] Handle closing keys
      const closeKeys: str[] = ["Escape", "Enter", " ", "Tab"];
      if (closeKeys.includes(e.key) || (e.altKey && e.key === "ArrowUp"))
        setIsExpanded(false);
    }
  };

  // Handle visual focused option
  useLayoutEffect((): void => {
    if (typeof visualFocusIndex === "number" && listbox.current) {
      const currentFocused =
        visualFocusIndex > 0
          ? [...listbox.current.children][visualFocusIndex]
          : listbox.current.firstElementChild;

      setVisualFocusedOption(currentFocused as HTMLDivElement);
      handleVisualFocusedViews();
    }
  }, [visualFocusIndex]);

  // Handle losing focus on close
  useLayoutEffect((): VoidFunction => {
    const handleClick = (): void => {
      if (
        listbox.current &&
        isExpanded &&
        document.activeElement !== listbox.current.parentElement
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("click", handleClick);
    return (): void => document.removeEventListener("click", handleClick);
  }, [document.activeElement]);

  // Handle `aria-activedescendant`
  useLayoutEffect((): void => {
    const handleParentAria = (ariaVal?: str): void => {
      if (listbox.current) {
        const aria: str = "aria-activedescendant";
        const parent = listbox.current.parentElement as divEle;
        ariaVal
          ? parent?.setAttribute(aria, ariaVal)
          : parent?.removeAttribute(aria);
      }
    };

    handleParentAria(isExpanded ? visualFocusedOption?.id : "");
  }, [isExpanded, visualFocusedOption]);

  return (
    <ComboBox
      isExpanded={isExpanded}
      visualFocusedOption={visualFocusedOption}
      activeOption={activeOption}
      listbox={listbox}
      handleClick={(): void =>
        !isExpanded ? openByClick() : setIsExpanded(false)
      }
      handleKeyDown={handleKeyDown}
      chooseOption={chooseOption}
      regions={regions}
    />
  );
}

export default FilterBox;
