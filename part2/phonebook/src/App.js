import React, { useState } from 'react'
import NameList from './components/NameList'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('Add a name...')
  const [newNumber, setNewNumber] = useState('Add phone number...')
  const [newFilterName, setFilterName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const personsToShow = showAll
    ? persons
    : persons.filter(persons => ((persons.name.toLocaleLowerCase()).includes(newFilterName.toLocaleLowerCase())))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if ((persons.filter(person => (person.name === newName))).length !== 0) {
      console.log((persons.filter(person => (person.name === newName))).length !== 0)
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  const handleFilterChange = (event) => {
    // console.log(event.target.value)
    setFilterName(event.target.value)
    if (event.target.value !== '') {
      setShowAll(false)
    }
    else {
      setShowAll(true)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>


      <form>
        <div>
          filter shown with: <input
            value={newFilterName}
            onChange={handleFilterChange}
          />
        </div>
      </form>

      <h3>add a new</h3>


      <form onSubmit={addPerson}>
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


      <h3>Numbers</h3>
      <NameList key={personsToShow.id} persons={personsToShow} />

    </div>

  )
}

export default App
