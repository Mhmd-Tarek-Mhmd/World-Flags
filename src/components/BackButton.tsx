import SvgIcon from "./SvgIcon";

function BackButton(): JSX.Element {
  const handleClick = (): void => {
    // TODO: back logic
  };

  return (
    <button
      aria-label="Back to home page"
      onClick={handleClick}
      className="bg w-52 md:w-32 h-16 md:h-10 rounded-md shadow-xy-md flex justify-center items-center gap-[22px] md:gap-3"
    >
      <SvgIcon className="scale-[1.4] md:scale-75">
        <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
      </SvgIcon>
      <span className="font-light">Back</span>
    </button>
  );
}

export default BackButton;
