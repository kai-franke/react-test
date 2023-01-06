import "./AddForm.css";
import { useEffect, useState } from "react";

export default function AddForm({ bootcamps }) {
  const [bootcampNames, setBootcampNames] = useState([]);

  useEffect(() => {
    const names = bootcamps.map((bootcamp) => bootcamp.bootcamp);
    setBootcampNames(names);
  }, [bootcamps]);

  return (
    <form name="addNewDeveloper">
      <h2>Add new developer</h2>
      <label>
        <span>First Name:</span>
        <input />
      </label>
      <label>
        <span>Last Name:</span>
        <input />
      </label>
      <label>
        <span>Select bootcamp:</span>
        <select id="bootcampNames" name="bootcampNames">
          {bootcampNames.map((bootcampName, index) => (
            <option key={index} value={bootcampName}>
              {bootcampName}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}
