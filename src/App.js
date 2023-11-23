import { useState, useEffect } from "react";
import Gallery from "./Components/Gallery/Gallery";
import Searchbar from "./Components/Searchbar";

function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for music')
  const [data, setData] = useState([])

useEffect(() => {
  const fetchData = async () => {
    const url = 'https://itunes.apple.com/search?term=black%20sabbath'
    const response = await fetch(url)
    const data = await response.json()

    if (data.results) {
      setData(data.results)
    } else{
      setData([])
      setMessage('Not Found')
    }
  }

  fetchData()
}, [search])

  return (
    <div className="App">
      <Gallery />
      {message}
      <Searchbar />
    </div>
  );
}

export default App;
