import SvgIcon from "../SvgIcon";

const ArrowIcon = (props: { isExpanded: boolean }): JSX.Element => (
  <SvgIcon className="scale-[.625] md:scale-[.4165]">
    {!props.isExpanded ? (
      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
    ) : (
      <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
    )}
  </SvgIcon>
);

export default ArrowIcon;
