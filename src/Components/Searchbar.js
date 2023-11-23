import { useState } from "react"

function Searchbar ({ handleSearch }) {
    const [searchTerm , setSearchTerm] = useState('')
    return(
        <form onSubmit={(e) => handleSearch(e, searchTerm)}>
            <input placeholder="Search for music" onChange={(e) => setSearchTerm(e.target.value)}/>
            <input type="submit"/>
        </form>
    )
}

export default Searchbar