import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: newName,
      number: newNumber
    }

    if (!persons.some(person => person.name === newName)) {
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    } 
    else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const numbersToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()) === true)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    if (event.target.value.length === 0) {
      //
      setShowAll(true)
      setNewFilter('')
    }
    else {
      setShowAll(false)
      setNewFilter(event.target.value)
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>

      <h3>add a new</h3>

      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}  
      />

      <h3>Numbers</h3>

      {numbersToShow.map(name =>
        <Persons key={name.id} name={name} />
        )}
    </div>
  )
}

export default App