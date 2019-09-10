import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1>{props.title}</h1>
}

const Statistic = (props) => {
    return <div> {props.text} {props.value} </div>

}

const Statistics = ({ good, neutral, bad }) => {
    var sum = good + neutral + bad;
    if (sum === 0) {
        return (
            <div> No feedback given </div>
        )
    }
    var average = (good - bad) / sum
    var positive = ((good / sum) * 100)
    // Doesn't look very nice to change into string but I don't know how else to get the percentage sign
    var percentage = positive.toString(10) + " %"

    return (
        <div>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={sum} />
            <Statistic text="Average" value={average} />
            <Statistic text="positive" value={percentage} />
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}


const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodClick = () => setGood(good + 1)
    const neutralClick = () => setNeutral(neutral + 1)
    const badClick = () => setBad(bad + 1)



    return (
        <div>
            <Header title={"Give feedback"} />
            <Button handleClick={goodClick} text="good" />
            <Button handleClick={neutralClick} text="neutral" />
            <Button handleClick={badClick} text="bad" />
            <Header title={"Statistics"} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>

    )
}


ReactDOM.render(<App />,
    document.getElementById('root')
)