import { useEffect, useState, useMemo } from "react";
import SearchQuery from "./SearchQuery";
import FilterComp from "./FilterComp";
import CountriesList from "./CountriesList";
import axios from "axios";
import Loader from "./Loader";
import _ from "lodash";

function Main({ isLoading, countries }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [regionFilter, setRegionFilter] = useState(null);

  const handleRegionFilter = (regionName) => {
    setRegionFilter(regionName);
  };

  const sortedCountryData = useMemo(() => {
    return regionFilter
      ? countries.filter((country) => country.region === regionFilter)
      : countries;
  }, [countries, regionFilter]);

  const debouncedHandleChange = _.debounce((query) => {
    setDebouncedQuery(query);
  }, 300);

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery); // Set the current input value immediately
    debouncedHandleChange(newQuery); // Set the debounced value
  };

  const searchCountry = useMemo(() => {
    return debouncedQuery
      ? countries.filter((country) =>
          country.name.toLowerCase().includes(debouncedQuery.toLowerCase()),
        )
      : countries;
  }, [debouncedQuery, countries]);

  return (
    <main>
      <div className="container m-auto min-h-screen px-4 py-4">
        <div className="my-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <SearchQuery query={query} handleChange={handleChange} />
          <FilterComp onRegionFilter={handleRegionFilter} />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <CountriesList
            isLoading={isLoading}
            countries={query ? searchCountry : sortedCountryData}
          />
        )}
      </div>
    </main>
  );
}

export default Main;
