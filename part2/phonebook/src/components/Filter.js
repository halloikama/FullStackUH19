import React from 'react'

const [newFilterName, setFilterName] = useState('')

const personsToShow = showAll
    ? persons
    : persons.filter(persons => ((persons.name.toLocaleLowerCase()).includes(newFilterName.toLocaleLowerCase())))

const handleFilterChange = (event) => {
    setFilterName(event.target.value)
    if (event.target.value !== '') {
        setShowAll(false)
    }
    else {
        setShowAll(true)
    }
}

const Filter = ({newFilterName}) => {
    return (<form>
        <div>
            filter shown with: <input value={newFilterName} onChange={handleFilterChange} />
        </div>
    </form>);
}


export default Filter