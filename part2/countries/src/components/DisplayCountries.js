import React from "react"
import Country from "./Country"
import Button from "./Button"

const DisplayCountries = ({filteredCountries, newFilter, handleClick}) => {
    if (filteredCountries.length > 10 && newFilter !== '') {
        return (
            <>Too many matches, specify another filter</>
        )
    }

    else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
        return (
            <div>
                {filteredCountries.map(country => 
                    <div key={country.name.common}>
                        {country.name.common} <Button value={country.name.common} onClick={handleClick}/>
                    </div>)}
            </div>
        )
    }

    else if (filteredCountries.length === 1) {
        return (
            <Country country={filteredCountries[0]} />
        )
    }

    else {
        return null
    }
  }

export default DisplayCountries