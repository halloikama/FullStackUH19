import React, { useState } from 'react'



const Filter = ({ onFilterChange, persons }) => {
    const [newFilterName, setFilterName] = useState('')



    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilterName(event.target.value)
        console.log(event.target.value)

        if (event.target.value === '') {
            console.log("WTF")
            onFilterChange(persons)
        }
        else {
            const newPersons = (persons.filter(persons =>((persons.name.toLocaleLowerCase()).includes(newFilterName.toLocaleLowerCase()))))
            console.log("PASSED", newPersons)
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