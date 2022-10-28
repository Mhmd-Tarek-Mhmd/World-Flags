import { ele, bool } from "../../types";

import SvgIcon from "../SvgIcon";

interface Props {
  isExpanded: bool;
}

const ArrowIcon = ({ isExpanded }: Props): ele => (
  <SvgIcon className="scale-[.625] md:scale-[.4165]">
    {!isExpanded ? (
      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
    ) : (
      <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
    )}
  </SvgIcon>
);

export default ArrowIcon;
