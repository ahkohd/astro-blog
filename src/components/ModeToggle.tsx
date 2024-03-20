import { useEffect, useState } from "react";

export function ModeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "system",
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");

    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <div className="mb-10 text-2xl">
      {theme === "dark" && (
        <button onClick={() => setThemeState("theme-light")}>🌤️</button>
      )}

      {theme !== "dark" && (
        <button onClick={() => setThemeState("dark")}>🌘</button>
      )}
    </div>
  );
}
