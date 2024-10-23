import React, { useEffect, useState } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";

function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const htmleEl = document.documentElement;
    if (isDark) {
      htmleEl.classList.add("dark");
    } else {
      htmleEl.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="w-full bg-white py-8 shadow-md transition-all duration-300 dark:bg-dblue">
      <div className="container m-auto flex items-center justify-between px-4 text-lmtblue transition-all duration-300 dark:text-dmtblue">
        <h2 className="text-lg font-extrabold sm:text-xl md:text-2xl">
          Where in the world?
        </h2>

        <div>
          <button
            className="flex items-center gap-3 font-semibold transition-all duration-300 hover:opacity-80"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <FaSun /> : <FaRegMoon />}
            {isDark ? "Light Mode" : `Dark Mode`}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
