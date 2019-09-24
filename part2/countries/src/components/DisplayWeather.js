import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'



const DisplayWeather = ({ match }) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        console.log('effect')
        axios
            .get('http://api.weatherstack.com/current', {
                params: {
                    'access_key': '812c3a6bee363358e3c06f6a722c5cae',
                    'query': match.capital
                }
            }
            )
            .then(response => {
                console.log('promise fulfilled')
                setWeather(response.data)

            })
    }, [match.capital])

    const getWeather = () => {
        console.log(match.capital)
        const temp = weather.current ? weather.current.temperature : "Temp not Found"
        const wind_speed = weather.current ? weather.current.wind_speed : "Wind_speed not Found"
        const wind_dir = weather.current ? weather.current.wind_dir : "Wind_direction not Found"
        const image = weather.current ? weather.current.weather_icons : false
        
        console.log(image[0])
        return(
            <>
            <p><b>Temperature:</b> {temp} degrees Celcius</p>
            <img src={image[0]} alt="Weather image" height="100"/>
            <p><b>Wind:</b> {wind_speed} kph, direction {wind_dir}</p>
            </>
        )
    }

    getWeather()

    return (
        <div>
            <Header text={" Weather in " + match.capital}/>
            {getWeather()}
        </div>
    )

}

export default DisplayWeather