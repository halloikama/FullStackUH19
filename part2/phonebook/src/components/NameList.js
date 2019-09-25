import React from 'react'

const Button = ({ onClick, person, text, persons }) => {
  return (
    <button onClick={() => onClick(person, persons)} >{text}</button>
  )
}

const NameList = ({ persons, handleDeleButton }) => {
    return (
      persons.map(person =>
        <p key={person.id}>
          {person.name + ' ' + person.number}
          <Button
            onClick={handleDeleButton}
            person={person}
            persons={persons}
            text='Delete' />
        </p>)
    )
  }

export default NameList