import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addName = (event) => {
    event.preventDefault()
    //console.log(event.target.name)
    const nameObject = {
      name: newName,
      id: newName,
      number: newNumber
    }

    if (!persons.some(person => person.name === newName)) {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    } 
    else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const numbersToShow = showAll
    ? persons
    : persons.filter(person => person.name.includes(newFilter) === true)

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    //console.log(event.target.value.length)
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
      <div>
        filter shown with<input
          value={newFilter}
          onChange={handleFilterChange}
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {numbersToShow.map(name =>
        <Numbers key={name.id} name={name} />
        )}
    </div>
  )
}

const Numbers = ({ name }) => {
  //console.log(name.id)
  return(
    <div>
      {name.name} {name.number}
    </div>
  )
}

export default App