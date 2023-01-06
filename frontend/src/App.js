import "./App.css";
import { useState, useEffect } from "react";
import BootcampsGallery from "./components/BootcampsGallery/BootcampsGallery.js";

function App() {
  const [allBootcamps, setAllBootcamps] = useState([{}, {}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/bootcamps/");
        const json = await response.json();
        setAllBootcamps(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <main>
        <BootcampsGallery bootcamps={allBootcamps} />
      </main>
    </div>
  );
}

export default App;