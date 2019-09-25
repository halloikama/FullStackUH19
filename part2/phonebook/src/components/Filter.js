import React, { useState } from 'react'



const Filter = ({ onFilterChange, persons }) => {
    const [newFilterName, setFilterName] = useState('')



    const handleFilterChange = (event) => {
        setFilterName(event.target.value)

        if (event.target.value === '') {
            console.log("empty search field")
            onFilterChange(persons)
        }
        else {
            console.log(persons)
            const newPersons = (persons.filter(persons => ((persons.name.toLocaleLowerCase()).includes(newFilterName.toLocaleLowerCase()))))
            console.log("new filter PASSED", newPersons)
            onFilterChange(persons.filter(persons =>
                ((persons.name.toLocaleLowerCase()).includes(event.target.value.toLocaleLowerCase()))))
        }
    }

    return (
        <form>
            <div>
                filter shown with: <input
                    value={newFilterName}
                    onChange={handleFilterChange}
                />
            </div>
        </form>

    )
}

export default Filter