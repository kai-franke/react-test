import "./App.css";
import { useState, useEffect } from "react";
import BootcampsGallery from "./components/BootcampsGallery/BootcampsGallery.js";
import AddForm from "./components/AddForm/AddForm";


function App() {
  
  const [allBootcamps, setAllBootcamps] = useState([]);

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
  }, []);

  return (
    <div className="App">
      <main>
        <AddForm bootcamps={allBootcamps} />
        <BootcampsGallery bootcamps={allBootcamps} />
      </main>
    </div>
  );
}

export default App;
