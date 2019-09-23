import React, { useState } from 'react'



const PersonForm = ({ addPerson }) => {

    const [newName, setNewName] = useState('Add a name...')
    const [newNumber, setNewNumber] = useState('Add phone number...')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={(event) => addPerson(event, newName, newNumber)}>
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
    )
}

export default PersonForm

