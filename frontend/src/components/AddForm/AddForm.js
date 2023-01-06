import "./AddForm.css";
import { useEffect, useState } from "react";

export default function AddForm({ bootcamps }) {
  const [bootcampNames, setBootcampNames] = useState([]);

  useEffect(() => {
    const names = bootcamps.map((bootcamp) => bootcamp.bootcamp);
    setBootcampNames(names);
  }, [bootcamps]);

  function refreshPage() {
    window.location.reload(true);
  }

  function handleSubmit(event) {
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const developerFullName = firstName + " " + lastName;
    const bootcampToChange = event.target.bootcampNames.value;

    fetch(`http://localhost:3001/bootcamps/${bootcampToChange}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: developerFullName }),
    });

    refreshPage();
  }

  return (
    <form id="newDeveloperForm" onSubmit={handleSubmit}>
      <h2 className="form-headline">Add new developer</h2>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          placeholder="enter first name"
          aria-placeholder="enter first name"
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          placeholder="enter last name"
          aria-placeholder="enter last name"
        />
      </label>
      <label>
        Select bootcamp:
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
