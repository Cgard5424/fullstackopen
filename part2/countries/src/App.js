import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FindCountries from './components/FindCountries'
import DisplayCountries from './components/DisplayCountries'
import Country from './components/Country'

const App = () => {
  
  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {

    //console.log('effect')
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      //console.log('promise fulfilled')
      setAllCountries(response.data)
    })
  }, [])

  const handleFilterChange = (event) => {
    //setNewFilter(event.target.value)
    //console.log(event.target.value)
    if (event.target.value.length === 0) {
      setNewFilter('')
    }
    else {
      setNewFilter(event.target.value)

    }
  }

  const filteredCountries = allCountries.filter((country) => country.name.common.toLowerCase().includes(newFilter.toLowerCase()));
  //console.log(filteredCountries)

  return (
    <div>
      <FindCountries newFilter={newFilter} handleFilterChange={handleFilterChange}/>

      <DisplayCountries filteredCountries={filteredCountries} />


    </div>
  )
}

export default App;