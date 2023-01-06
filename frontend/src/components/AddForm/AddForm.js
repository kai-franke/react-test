import "./AddForm.css";
import { useEffect, useState } from "react";

export default function AddForm({ bootcamps }) {
  const [bootcampNames, setBootcampNames] = useState([]);

  useEffect(() => {
    const names = bootcamps.map((bootcamp) => bootcamp.bootcamp);
    setBootcampNames(names);
  }, [bootcamps]);

  function handleSubmit(event) {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const developerFullName = firstName + " " + lastName;
    const bootcampToChange = event.target.bootcampNames.value;
    console.log("developerFullName", developerFullName);
    console.log("bootcampToChange", bootcampToChange);

    fetch(`http://localhost:3001/bootcamps/${bootcampToChange}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: developerFullName }),
    });
  }

  return (
    <form id="newDeveloperForm" onSubmit={handleSubmit}>
      <h2>Add new developer</h2>
      <label>
        <span>First Name:</span>
        <input type="text" name="firstName" />
      </label>
      <label>
        <span>Last Name:</span>
        <input type="text" name="lastName" />
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
      <button type="submit" form="newDeveloperForm">
        Add Developer
      </button>
    </form>
  );
}
