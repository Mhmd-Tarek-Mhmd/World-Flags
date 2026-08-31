import React from "react";

const DARK_THEME = "dark";
const LIGHT_THEME = "light";
const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? DARK_THEME
  : LIGHT_THEME;

export default function useTheme() {
  const [theme, setTheme] = React.useState<string>(() => defaultTheme);

  React.useEffect(() => {
    const syncTheme = () => {
      setTheme(
        document.documentElement.classList.contains("dark")
          ? DARK_THEME
          : LIGHT_THEME,
      );
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = (): void => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  return { theme, isDark: theme === DARK_THEME, toggleTheme };
}
