import React from "react"
import { useState, useEffect } from "react/cjs/react.development"
import axios from 'axios'

const Country = ({country}) => {

    const [weather, setWeather] = useState('')
    

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`).then(response => {
          setWeather(response.data)
        })
      }, [country])

    if (weather.length === 0) {
        return null
    }

    return (
        <div>
            <h2>{country.name.common}</h2>
            capital {country.capital}<br></br>
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

            <h3>Weather in {country.capital}</h3>
            <b>temperature:</b> {weather.main.temp.toFixed(1)} Celsius<br></br>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={"Weather icon"} /><br></br>
            <b>wind:</b> {weather.wind.speed} m/s direction {weather.wind.deg} deg

        </div>
    )
  }

export default Country