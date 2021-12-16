import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    //console.log(event.target.name)
    const nameObject = {
      name: newName,
      id: newName
    }

    if (!persons.some(person => person.name === newName)) {
      setPersons(persons.concat(nameObject))
      setNewName('')
    } 
    else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(name =>
        <Name key={name.id} name={name} />
        )}
    </div>
  )
}

const Name = ({ name }) => {
  //console.log(name.id)
  return(
    <div>
      {name.name}
    </div>
  )
}

export default App