import React from 'react'
import Header from './Header'
import DisplayWeather from './DisplayWeather'

const GetLanguages = ({ languages }) => {
    return (
        languages.map(language =>
            <li key={language.iso639_2}>
                {language.name}
            </li>)
    )
}



const DisplayCountry = ({ match }) => {
    return (
        <div>
            <Header text={match.name} />
            <p>capital: {match.capital}</p>
            <p>population: {match.population}</p>

            <h2>Languages</h2>
            <ul>
                <GetLanguages languages={match.languages} />
            </ul>
            <img src={match.flag} alt="Flag of coutntry" height="150" />
            <DisplayWeather match={match} />
        </div>

    )
}

export default DisplayCountry