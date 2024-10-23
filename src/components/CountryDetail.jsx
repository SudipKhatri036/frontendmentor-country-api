import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AddComma } from "../utils/helper";
import Loader from "./Loader";

function CountryDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [countryDetail, setCountryDetail] = useState([]);

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCountryDetail = async () => {
      try {
        setIsLoading(true);
        // const res = await axios.get(
        //   `https://restcountries.com/v3.1/name/${name}`,
        // );
        const res = await axios.get("/api/data.json");

        setCountryDetail(
          res?.data?.filter(
            (country) => country.name.toLowerCase() === name.toLowerCase(),
          )[0],
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getCountryDetail();
  }, [name]);

  return (
    <section>
      <div className="container m-auto min-h-screen px-6 py-4">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <button
              onClick={() => navigate("/")}
              className="mt-8 px-6 py-1 font-semibold tracking-wider shadow-[0px_0px_4px_0px_rgba(0,0,0,0.75);] dark:bg-dblue dark:text-white"
            >
              &larr; Back
            </button>

            <div className="items-center gap-20 md:flex">
              <div className="m-auto mt-12 w-full md:mx-0 md:w-2/4">
                <img
                  src={countryDetail?.flag}
                  alt="Flag Image"
                  className="w-full"
                />
              </div>

              <div className="mt-12">
                <div className="md:flex md:justify-between">
                  <div>
                    <h2 className="mb-6 text-2xl font-extrabold tracking-wide dark:text-white">
                      {countryDetail?.name}
                    </h2>

                    <p className="mb-4 font-bold tracking-wide dark:text-white">
                      Native Name:{" "}
                      <span className="font-normal dark:font-light dark:opacity-80">
                        {countryDetail?.nativeName || "N/A"}
                      </span>
                    </p>
                    <p className="mb-4 font-bold tracking-wide dark:text-white">
                      Population:{" "}
                      <span className="font-normal dark:font-light dark:opacity-80">
                        {AddComma(countryDetail?.population || "")}
                      </span>
                    </p>
                    <p className="mb-4 font-bold tracking-wide dark:text-white">
                      Region:{" "}
                      <span className="font-normal dark:font-light dark:opacity-80">
                        {countryDetail?.region || "N/A"}
                      </span>
                    </p>
                    <p className="mb-4 font-bold tracking-wide dark:text-white">
                      Sub Region:{" "}
                      <span className="font-normal dark:font-light dark:opacity-80">
                        {countryDetail?.subregion || "N/A"}
                      </span>
                    </p>
                    <p className="mb-4 font-bold tracking-wide dark:text-white">
                      Capital:{" "}
                      <span className="font-normal dark:font-light dark:opacity-80">
                        {countryDetail?.capital || "N/A"}
                      </span>
                    </p>
                  </div>

                  <div className="mt-12">
                    <p className="mb-4 font-bold tracking-wide dark:text-white">
                      Top Level Domain:{" "}
                      <span className="font-normal dark:font-light dark:opacity-80">
                        {countryDetail?.topLevelDomain[0]}
                      </span>
                    </p>
                    <p className="mb-4 font-bold tracking-wide dark:text-white">
                      Currencies:{" "}
                      <span className="font-normal dark:font-light dark:opacity-80">
                        {/* {countryDetail?.currencies?.[
                          Object.keys(countryDetail?.currencies)[0]
                        ]?.name || "N/A"} */}
                        {countryDetail?.currencies?.[0].name || "N/A"}
                      </span>
                    </p>
                    <p className="mb-4 font-bold tracking-wide dark:text-dmtblue">
                      Laguages:{" "}
                      {countryDetail?.languages.map((lang, idx) => {
                        return (
                          <span
                            key={idx}
                            className="ml-1 font-normal dark:font-light dark:opacity-80"
                          >
                            {lang.name},
                          </span>
                        );
                      }) || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="gap-4 md:mt-12 md:flex md:items-center dark:text-dmtblue">
                  <p className="font-bold tracking-wide">Border Countries:</p>
                  <ul className="mt-4 flex flex-wrap gap-2 tracking-wide">
                    {(countryDetail?.borders &&
                      countryDetail?.borders.map((border, idx) => {
                        return (
                          <li
                            key={idx}
                            className="tefont-normal xt-sm px-6 py-1 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.75);] dark:bg-dblue dark:font-light dark:opacity-80"
                          >
                            {border}
                          </li>
                        );
                      })) ||
                      "N/A"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CountryDetail;
