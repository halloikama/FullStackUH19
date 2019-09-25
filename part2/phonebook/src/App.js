import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import NameList from './components/NameList'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'



const App = () => {
  const [persons, setPersons] = useState([])
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationStyle, setNotificationStyle] = useState('success')

  useEffect(() => {
    personService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
        setPersonsToShow(initialNotes) //there should be a way to update personsToShow every time Persons changes...
      })
  }, [])


  const addPerson = (event, newName, newNumber) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }


    if ((persons.filter(person => (person.name === newName))).length !== 0) {
      const person = (persons.find(person => person.name === newName))
      console.log(person)
      const newPersonObject = { ...person, number: newNumber }
      console.log("name EXISTS already")

      if (window.confirm(`${person.name} has already been added to phonebook, replace the old number with a new one?`)) {
        console.log(`replacing phonenumber of id ${person.id} with ${newNumber}`)
        const id = person.id
        personService
          .update(id, newPersonObject).then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
            setPersonsToShow(persons.map(person => person.id !== id ? person : returnedPerson))
          })
        setErrorMessage(
          `Updated ${person.name}'s phone number`
        )
        setNotificationStyle('success')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    }

    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setPersonsToShow(persons.concat(returnedPerson))
        })
      setErrorMessage(
        `Added ${personObject.name} to phone book`
      )
      setNotificationStyle('success')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)

    }

  }


  const handleDeleButton = (person) => {
    console.log("Deleting item with id", person.id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person)
        .then(res => setPersons(persons => {
          setPersons(persons.filter(x => x.id !== person.id))
          setPersonsToShow(persons.filter(x => x.id !== person.id))
        }))
        .catch(error => {
          setErrorMessage(
            `${person.name} has already been removed from server`
          )
          setNotificationStyle('fail')
          setTimeout(() => {
            setErrorMessage(null)
            
          }, 5000)
          setPersons(persons.filter(x => x.id !== person.id))
          setPersonsToShow(persons.filter(x => x.id !== person.id))
        })
        setErrorMessage(
          `${person.name} has been removed from phonebook`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
    }
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} style={notificationStyle} />
      <Filter persons={persons} onFilterChange={setPersonsToShow} />
      <h3>add a new</h3>
      <PersonForm addPerson={addPerson} />
      <h3>Numbers</h3>
      <NameList persons={personsToShow} handleDeleButton={handleDeleButton} />
    </div>

  )
}

export default App
