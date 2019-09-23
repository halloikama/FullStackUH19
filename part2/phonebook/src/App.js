import React, { useState } from 'react'
import NameList from './components/NameList'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [personsToShow, setPersonsToShow] = useState(persons)
  const [nextID, setnextID] = useState(5)

  const newID = () => {
    setnextID(nextID + 1)
    return (
      nextID
    )
  }
  const addPerson = (event, newName, newNumber) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: newID()
    }

    if ((persons.filter(person => (person.name === newName))).length !== 0) {
      console.log((persons.filter(person => (person.name === newName))).length !== 0)
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(personObject))
      setPersonsToShow(persons.concat(personObject))
    }

  }

  const logPersonChange = (persons) => {
    setPersonsToShow(persons)
    console.log(personsToShow)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} onFilterChange={logPersonChange} />

      <h3>add a new</h3>
      <PersonForm addPerson={addPerson} />


      <h3>Numbers</h3>
      <NameList key={personsToShow.id} persons={personsToShow} />

    </div>

  )
}

export default App
