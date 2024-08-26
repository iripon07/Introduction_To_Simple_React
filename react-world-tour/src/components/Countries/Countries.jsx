import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([])

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = country =>{
    console.log('Add this to your visited country');
    console.log(country);
  }


  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <div>
        <h5>Visited countries</h5>
        <ul></ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
