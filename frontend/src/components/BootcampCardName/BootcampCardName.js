import { useState } from "react";
import "./BootcampCardName.css";

export default function BootcampCardName({
  isDeveloper,
  role,
  bootcampName,
  setUpdate,
}) {
  const [toggle, setToggle] = useState(false);

  function handleDelete(bootcamp, id) {
    fetch(`http://localhost:3001/bootcamps/${bootcamp}/developers/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(setUpdate(Math.random()));
  }

  return (
    <li>
      {isDeveloper ? (
        <p onClick={() => setToggle((prevToggle) => !prevToggle)}>
          {role.name}
        </p>
      ) : (
        <p>{role.name}</p>
      )}
      {toggle && (
        <button className="delete-button" onClick={() => handleDelete(bootcampName, role.id)}>
          delete
        </button>
      )}
    </li>
  );
}
