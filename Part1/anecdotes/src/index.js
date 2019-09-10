import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1>{props.title}</h1>
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const MostVotes = (props) => {
    var max = Math.max(...props.list);
    var idx = props.list.indexOf(max)
    if (max === 0){
        return <div> No votes yet! </div>
    }

    return(
       <div>{props.anecdotes[idx]}</div> 
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(10 + 1).join('0').split('').map(parseFloat))

    const getRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length))

    const updateScore = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }
    

    return (
        <div>
             <Header title={"Anecdote of the day"} />
            <div>{props.anecdotes[selected]}</div>
            <div>has {points[selected]} votes</div>
            <Button handleClick={updateScore} text="vote" />
            <Button handleClick={getRandom} text="next anecdote" />
            <Header title={"Anecdote with most votes"} />
            <MostVotes list={points} anecdotes={anecdotes}/>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)