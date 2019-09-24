import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountyList from './components/CountryList'
import Header from './components/Header'
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilterName, setFilterName] = useState('')
  const [countriesToShow, setCountriesToShow] = useState(countries)

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const onFilterChange = (countries) => {
    setCountriesToShow(countries)
  }

  const handleFilterChange = (event) => {
    // console.log(event.target.value)
    setFilterName(event.target.value)
    onFilterChange(countries.filter(countries => ((countries.name.toLocaleLowerCase()).includes(event.target.value.toLocaleLowerCase()))))
  }

  const handleButtonPress = (country) => {
    setCountriesToShow([country])
  }

  // console.log(countriesToShow.length)
  return (
    <div>
      <Header text={'Find countries'} />
      <form>
        Search Countries: <input
          value={newFilterName}
          onChange={handleFilterChange} />
      </form>
      <CountyList onButton={handleButtonPress} countries={countriesToShow} />
    </div>
  );
}

export default App;
