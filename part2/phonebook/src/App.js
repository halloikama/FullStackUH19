import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NameList from './components/NameList'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'



const App = () => {
  const [persons, setPersons] = useState([])
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [nextID, setnextID] = useState(5)
  
 

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
      setPersonsToShow(persons.concat(personObject))
      setPersons(persons.concat(personObject))
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
      <NameList  persons={personsToShow} />

      <p>Note: I couldn't get the filter and namelist to work without one being dependent on the other. 
        the names will only display on change in the filter...
      </p>

    </div>

  )
}

export default App
