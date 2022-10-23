import ThemeToggler from "../components/ThemeToggler";

function Header(): JSX.Element {
  return (
    <header className="bg shadow-sm h-[160px] md:h-[80px] flex items-center">
      <div className="container flex justify-between items-center">
        <h1 className="text-3xl md:text-2xl cursor-default">World Flags</h1>
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
