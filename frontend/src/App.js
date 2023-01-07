import "./App.css";
import { useState, useEffect } from "react";
import BootcampsGallery from "./components/BootcampsGallery/BootcampsGallery.js";
import AddForm from "./components/AddForm/AddForm";

function App() {
  const [allBootcamps, setAllBootcamps] = useState([]);
  const [bootcampNames, setBootcampNames] = useState([]);
  const [update, setUpdate] = useState([]);

  useEffect(() => {
    const names = allBootcamps.map((bootcamp) => bootcamp.bootcamp);
    setBootcampNames(names);
  }, [allBootcamps]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3001/bootcamps/");
      const result = await response.json();
      setAllBootcamps(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [update]);

  return (
    <div className="App">
      <main>
        <AddForm bootcampNames={bootcampNames} setUpdate={setUpdate}/>
        <BootcampsGallery
          bootcamps={allBootcamps}
          bootcampNames={bootcampNames}
        />
      </main>
    </div>
  );
}

export default App;
