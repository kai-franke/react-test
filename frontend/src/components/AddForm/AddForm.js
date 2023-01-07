import { useEffect, useState } from "react";
import "./AddForm.css";

export default function AddForm({ bootcampNames, setUpdate }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasError(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [hasError]);

  function handleSubmit(event) {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    // check if first or last name input is empty and show error message
    if (firstName === "" || lastName === "") {
      console.error("Please fill in the fields for first AND last name.");
      setHasError(true);
      return;
    }
    const developerFullName = firstName + " " + lastName;
    const bootcampToChange = event.target.bootcampNames.value;

    fetch(`http://localhost:3001/bootcamps/${bootcampToChange}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: developerFullName }),
    })
      .then((resp) => resp.json())
      .then((data) => setUpdate(data));

    event.target.reset();
  }

  return (
    <form id="addDeveloperForm" onSubmit={handleSubmit}>
      <h2 className="form-headline">Add new developer</h2>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          placeholder="enter first name"
          aria-placeholder="enter first name"
          className="addDeveloperFirstNameInput"
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          placeholder="enter last name"
          aria-placeholder="enter last name"
          className="addDeveloperLastNameInput"
        />
      </label>
      <p className={hasError ? "errorMessage" : "hidden"}>
        Please fill in the fields for first AND last name.
      </p>
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
      <button type="submit" form="addDeveloperForm" id="addDeveloperBtn">
        Add Developer
      </button>
    </form>
  );
}
