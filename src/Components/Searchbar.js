import { useState } from "react"

function Searchbar () {
    const [searchTerm , setSearchTerm] = useState('')
    return(
        <form>
            <input placeholder="Search for music"/>
            <input type="submit"/>
        </form>
    )
}

export default Searchbar