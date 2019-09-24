import React from 'react'

import DisplayCountry from './DisplayCountry'



const Button = ({ onClick, name, text }) => {
  return (
    <button onClick={() => onClick(name)} >{text}</button>
  )
}

const CountryList = ({ onButton, countries }) => {
  console.log("How many countries", countries.length)
  console.log(countries)

  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }

  if (countries.length === 1) {
    console.log("ONE MATCH!")
    return (
      <DisplayCountry match={countries[0]} />
    )
  }

  else {
    return (
      countries.map(country =>
        <p key={country.numericCode}>
          {country.name}
          <Button
            onClick={onButton}
            name={country}
            text='Show' />
        </p>
      )
    )
  }

}

export default CountryList