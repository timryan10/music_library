import { useState, useEffect } from "react";
import Gallery from "./Components/Gallery";
import Searchbar from "./Components/Searchbar";

function App() {
  return (
    <div className="App">
      <Gallery />
      <Searchbar />
    </div>
  );
}

export default App;
