import React from 'react'



const NameList = ({ persons }) => {
    return (
      persons.map(person =>
        <p key={person.id}>
          {person.name + ' ' + person.number}
        </p>)
    )
  }

export default NameList