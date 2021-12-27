import React from "react"

const Country = ({country}) => {

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            population {country.population}

            <h3>
                languages
            </h3>
            <ul>
                {Object.values(country.languages).map(language =>
                    <li key={language}>{language}</li>
                    )}      
            </ul>
            <img src={country.flags.png} alt={country.name.common} />
        </div>
    )
  }

export default Country