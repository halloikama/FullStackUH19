const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())
const morgan = require('morgan')


morgan.token('POST', function(req, res){
    return (
        `{name: ${req.body.name}, number: ${req.body.number}}`
    )
})

app.use(morgan('tiny', {
    skip: function (req, res) { return req.method === 'POST'}
  }))


app.use(morgan(':method :status :res[content-length] - :response-time ms :POST ', {
    skip: function (req, res) { return req.method !== 'POST'}
  }))

let persons = [
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 1
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 2
    },
    {
        "name": "Rick ",
        "number": "5326879-5642",
        "id": 3
    }
]


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

const generateId = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}


app.post('/persons', (request, response) => {
    console.log(typeof request.method)
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number is missing: please fill in both'
        })
    }

    if ((persons.filter(person => (person.name.toLocaleLowerCase() === body.name.toLocaleLowerCase()))).length !== 0){
        console.log("Name exists already")
        return response.status(400).json({
            error: 'name imust be unique, person already exists'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(0,100000000),
    }

    persons = persons.concat(person)

    response.json(person)
})

app.get('/persons', (req, res) => {
    res.json(persons)
})

app.get('/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

app.get('/info', (req, res) => {
    const date = new Date()
    const length = persons.length
    console.log(length)
    res.send(`<p>Phonebook has ${length} entries</p> <p>${date} </p>`)
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)