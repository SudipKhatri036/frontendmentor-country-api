import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function FilterComp({ onRegionFilter }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
      <div className="group relative mr-auto w-3/4 text-lmtblue sm:w-1/2 md:w-auto dark:text-dmtblue">
        <h3
          className="flex cursor-pointer items-center gap-3 rounded-md border-2 p-4 font-semibold tracking-wider shadow-sm transition-all duration-300 group-hover:opacity-80 dark:border-transparent dark:bg-dblue"
          onClick={() => setOpenMenu(!openMenu)}
        >
          Filter by Region <MdKeyboardArrowDown />
        </h3>

        <ul
          className={`absolute z-0 mt-1 w-full transform rounded-md border-2 bg-white p-6 text-lg font-semibold tracking-wide opacity-0 shadow-sm transition-all duration-300 group-hover:z-[1] md:-translate-y-[800px] md:translate-x-0 md:group-hover:translate-y-[0] md:group-hover:opacity-100 dark:border-transparent dark:bg-dblue ${openMenu ? "translate-x-0 opacity-100" : "-translate-x-[300px]"}`}
        >
          <li>
            <button onClick={(e) => onRegionFilter(null)}>All</button>
          </li>
          <li>
            <button onClick={(e) => onRegionFilter(e.target.textContent)}>
              Africa
            </button>
          </li>
          <li>
            <button onClick={(e) => onRegionFilter(e.target.textContent)}>
              Americas
            </button>
          </li>
          <li>
            <button onClick={(e) => onRegionFilter(e.target.textContent)}>
              Asia
            </button>
          </li>
          <li>
            <button onClick={(e) => onRegionFilter(e.target.textContent)}>
              Europe
            </button>
          </li>
          <li>
            <button onClick={(e) => onRegionFilter(e.target.textContent)}>
              Oceania
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default FilterComp;
