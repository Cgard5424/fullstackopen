import React from "react"

const DisplayCountries = ({filteredCountries}) => {
    if (filteredCountries.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
        return (
            <div>
                {filteredCountries.map(country => 
                    <div>
                        {country.name.common}
                    </div>)}
            </div>
        )
    }

    else {
        return (
            <p>1 country, display all info for the country</p>
            // need to call the Country component here, then inside that component render everything
        )
    }
  }

export default DisplayCountries