import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FindCountries from './components/FindCountries'
import DisplayCountries from './components/DisplayCountries'

const App = () => {
  
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      console.log('promise fulfilled')
      console.log(response.data[4].name) // response.data is an array where each index is a country
    })
  }, [])


  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    console.log(event.target.value)
  }


  return (
    <div>
      <FindCountries newFilter={newFilter} handleFilterChange={handleFilterChange}/>

      <DisplayCountries />
    </div>
  )
}

export default App;