import React, { useEffect, useState } from "react"
import axios from "axios";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then(response => setCountries(response.data))
      .catch(error => console.log({ error }));
  }, []);

  const renderBody = () => {
    return (
      <React.Fragment>
        {countries.map((country) => {
          return (
            <tr key={country.name}>

              <td><img src={country.flag} alt={country.name} style={{ width: "300px" }} /></td>
              <td>{country.name}</td>
              <td>{country.capital}</td>
            </tr>
          )
        })}
      </React.Fragment>
    )
  }


  return (
    <>
      <h1 className="text-center">Ülkeler ve Başka Şeyler</h1>
      <table className="table mt-3 px-3">
        <thead>
          <tr>
            <th scope="col">Bayrak</th>
            <th scope="col">Ülke</th>
            <th scope="col">Başkent</th>
          </tr>
        </thead>
        <tbody>
          {renderBody()}
        </tbody>
      </table>
    </>
  );
}
