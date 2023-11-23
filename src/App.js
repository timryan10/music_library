import { useState, useEffect } from "react";
import Gallery from "./Components/Gallery/Gallery";
import Searchbar from "./Components/Searchbar";

function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for music')
  const [data, setData] = useState([])
  return (
    <div className="App">
      <Gallery />
      {message}
      <Searchbar />
    </div>
  );
}

export default App;
