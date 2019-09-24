import React, { useState } from 'react'



const Filter = ({ onFilterChange, countries }) => {
    const [newFilterName, setFilterName] = useState('')
    console.log("!!!!", newFilterName)
    


    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilterName(event.target.value)
        console.log(event.target.value)

        if (event.target.value === '') {
            console.log("=== '' ")
            onFilterChange(countries)
        }
        else {
            const newCountries = (countries.filter(countries =>((countries.name.toLocaleLowerCase()).includes(newFilterName.toLocaleLowerCase()))))
            console.log("PASSED", newCountries)
            onFilterChange(countries.filter(countries =>
                ((countries.name.toLocaleLowerCase()).includes(event.target.value.toLocaleLowerCase()))))
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