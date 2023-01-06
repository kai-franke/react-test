import "./App.css";
import BootcampCard from "./components/BootcampCard/BootcampCard.js";
import { useState, useEffect } from "react";

function App() {
  const [allBootcamps, setAllBootcamps] = useState("");

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

  console.log("allBootcamps", allBootcamps);

  return (
    <div className="App">
      <main>
        <BootcampCard />
      </main>
    </div>
  );
}

export default App;
