import { useState } from "react";
import "./BootcampCardName.css";

export default function BootcampCardName({ isDeveloper, role }) {
  const [toggle, setToggle] = useState(false);

  function handleDelete(id) {
    console.log("delete", id);
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
      {toggle && <button onClick={() => handleDelete(role.id)}>delete</button>}
    </li>
  );
}
