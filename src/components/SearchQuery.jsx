import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchQuery({ query, handleChange }) {
  return (
    <div className="flex items-center gap-5 rounded-md border-2 bg-white pl-6 text-xl text-lmtblue transition-all duration-300 dark:border-transparent dark:bg-dblue dark:text-dmtblue">
      <div>
        <FaSearch />
      </div>

      <input
        type="text"
        name="search"
        placeholder="Search for a country..."
        autoComplete="off"
        className="w-full border-b-2 border-transparent px-4 py-4 outline-none focus:border-blue-500 dark:bg-dblue"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchQuery;
