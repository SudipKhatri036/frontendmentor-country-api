import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import CountryDetail from "./components/CountryDetail";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        // const res = await axios.get("https://restcountries.com/v3.1/all");
        const res = await axios.get("/api/data.json");

        setCountries(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Main isLoading={isLoading} countries={countries} />}
          />
          <Route path="country/:name" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
