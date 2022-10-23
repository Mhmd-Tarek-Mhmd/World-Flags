interface Svg {
  children: JSX.Element | JSX.Element[];
  viewBox?: string;
  className?: string;
}

function SvgIcon({ children, ...props }: Svg): JSX.Element {
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
