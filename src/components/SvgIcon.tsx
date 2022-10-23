interface Svg {
  children: JSX.Element | JSX.Element[];
  viewBox?: string;
  className?: string;
  width?: string;
  height?: string;
}

function SvgIcon({ children, ...props }: Svg): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

export default SvgIcon;
