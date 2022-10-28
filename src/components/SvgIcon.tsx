import { str, ele } from "../types";

interface Props {
  viewBox?: str;
  className?: str;
  children: ele | ele[];
}

function SvgIcon({ children, ...props }: Props): ele {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

export default SvgIcon;
