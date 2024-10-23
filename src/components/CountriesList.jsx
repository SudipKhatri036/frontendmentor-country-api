import React from "react";
import { useNavigate } from "react-router-dom";
import { AddComma } from "../utils/helper";

function CountriesList({ countries, isLoading }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {!isLoading && countries.length ? (
        countries.map((country) => {
          const {
            name: countryName,
            population,
            flag,
            region,
            capital,
          } = country;

          return (
            <div
              className="rounded-lg bg-lbgblue shadow-md transition-all duration-300 dark:bg-dblue"
              key={countryName}
            >
              <div className="h-40 max-h-full max-w-full overflow-hidden rounded-t-lg">
                <img
                  src={flag}
                  alt="Brazil"
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className="cursor-pointer p-8 md:p-6 dark:text-dmtblue"
                onClick={() => navigate(`country/${countryName}`)}
              >
                <h3 className="mb-4 text-2xl font-bold capitalize tracking-wide">
                  {countryName}
                </h3>

                <p className="mb-1 text-lg font-bold tracking-wide md:mb-0 md:text-sm">
                  Population:{" "}
                  <span className="opacity-90 dark:opacity-80">
                    {AddComma(population)}
                  </span>
                </p>
                <p className="mb-1 text-lg font-bold tracking-wide md:mb-0 md:text-sm">
                  Region:{" "}
                  <span className="tracking-wider opacity-90 dark:opacity-80">
                    {region}
                  </span>
                </p>
                <p className="mb-1 text-lg font-bold tracking-wide md:mb-0 md:text-sm">
                  Capital:{" "}
                  <span className="tracking-wider opacity-90 dark:opacity-80">
                    {capital}
                  </span>
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="w-full text-3xl font-bold text-red-400">
          😢 No Results Found!
        </h2>
      )}
    </div>
  );
}

export default CountriesList;
