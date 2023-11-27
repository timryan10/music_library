import { useState, useEffect } from "react";
import { DataContext } from "./contexts/DataContext";
import Gallery from "./Components/Gallery/Gallery";
import Searchbar from "./Components/Searchbar";

function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for music')
  const [data, setData] = useState([])

useEffect(() => {
    if (search) {
      const fetchData = async () => {
        const url = (`https://itunes.apple.com/search?term=${search}`)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if (data.results.length > 0) {
          setData(data.results)
        } else {
          setData([])
          setMessage('Not Found')
        }
      }
  
      fetchData()
    }
  }, [search])

const handleSearch = (e, term) => {
  e.preventDefault()
  setSearch(term)
}

  return (
    <div className="App">
      <Searchbar handleSearch={handleSearch}/>
      {message}
      <DataContext.Provider value={data} >
        <Gallery/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
