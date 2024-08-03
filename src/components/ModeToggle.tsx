import { useEffect, useState } from "react";

export function ModeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark">(
    (localStorage.getItem("theme") as never) ?? "theme-light",
  );

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <div className="text-sm">
      {theme === "dark" && (
        <button
          onClick={() => setThemeState("theme-light")}
          className="italic decoration-dotted hover:underline active:opacity-50"
        >
          Let there be{" "}
          <span className="font-serif italic text-base">light</span>
          ...
        </button>
      )}
      {theme !== "dark" && (
        <button
          onClick={() => setThemeState("dark")}
          className="italic decoration-dotted hover:underline active:opacity-50"
        >
          And if you gaze long enough into an{" "}
          <span className="font-serif italic text-base">Abyss</span>...
        </button>
      )}
    </div>
  );
}
