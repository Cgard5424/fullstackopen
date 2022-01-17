import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newMessage, setNewMessage] = useState(null)
  const [newMessageType, setNewMessageType] = useState('success')

  useEffect(() => {
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
      number: newNumber
    }

    if (!newName) {
      setNewMessageType('error')
      setNewMessage('Error: no name was provided')
      setTimeout(() => {
        setNewMessage(null)
      }, 5000)
    }

    else if (!newNumber) {
      setNewMessageType('error')
      setNewMessage('Error: no number was provided')
      setTimeout(() => {
        setNewMessage(null)
      }, 5000)
    }

    else if (!persons.some(person => person.name === newName)) {
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setNewMessageType('success')
          setNewMessage(`Added ${newName}`)
          setTimeout(() => {
            setNewMessage(null)
          }, 5000)
        })
        .catch(error => {
          setNewMessageType('error')
          setNewMessage(error.response.data.error)
          setTimeout(() => {
            setNewMessage(null)
          }, 5000)
        })
    }

    else {
      if (window.confirm(`${newName} is already added to phonebook. Replace the older number with a new one?`)) {
        updateNumber()
        setNewName('')
        setNewNumber('')
        setNewMessageType('success')
        setNewMessage(`Number for ${newName} has been updated`)
        setTimeout(() => {
          setNewMessage(null)
        }, 5000)
      }
    }
  }

  const updateNumber = () => {
    const person = persons.find(person => person.name === newName)
    const updatedPerson = {
      ...person,
      number: newNumber
    }

    personService
      .update(person.id, updatedPerson)
      .then(returnedPerson => {
        setPersons(
          persons.map(person =>
            person.id !== returnedPerson.id ? person : returnedPerson
          )
        )
      })
      .catch(error => {
        console.log(error.response.data.error)
        setNewMessageType('error')
        setNewMessage(error.response.data.error)
        setTimeout(() => {
          setNewMessage(null)
        }, 5000)
      })
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)){
      personService
        .remove(id)
        .then(() => {
          const newPersons = persons.filter(p => p.id !== id)
          setPersons(newPersons)
          setNewMessageType('success')
          setNewMessage(`${name} successfully removed from the server`)
          setTimeout(() => {
            setNewMessage(null)
          }, 5000)
        })
        .catch(error => {
          setNewMessageType('error')
          setNewMessage(`Information of ${name} has already been removed from the server`)
          setTimeout(() => {
            setNewMessage(null)
          }, 5000)
        })
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
    <div className='App'>
      <h2 className='title'>Phonebook</h2>
      <Notification message={newMessage} notificationType={newMessageType}/>
      <Filter newFilter={newFilter} handleFilterChange={ handleFilterChange }/>

      <h3 className='headers'>Add a new:</h3>

      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3 className='headers'>Numbers</h3>
      {numbersToShow.map(name =>
        <Persons key={name.id} name={name} deletePerson={() => deletePerson(name.id, name.name)}/>
      )}
    </div>
  )
}

export default App