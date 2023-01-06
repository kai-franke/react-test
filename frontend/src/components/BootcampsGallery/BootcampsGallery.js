import "./BootcampsGallery.css";
import BootcampCard from "../BootcampCard/BootcampCard";
import { useEffect, useState } from "react";

export default function BootcampsGallery({ bootcamps, bootcampNames }) {
  const [bootcampFilterOption, setBootcampFilterOption] = useState("all");
  const [filteredBootcamps, setFilteredBootcamps] = useState(bootcamps);

  useEffect(() => {
    filterBootcamps();
  }, [bootcamps, bootcampFilterOption]);

  function handleChange(event) {
    setBootcampFilterOption(event.target.value);
    filterBootcamps();
  }

  function filterBootcamps() {
    if (bootcampFilterOption !== "all") {
      const filtered = bootcamps.filter(
        (bootcamp) => bootcamp.bootcamp === bootcampFilterOption
      );
      setFilteredBootcamps(filtered);
    } else {
      setFilteredBootcamps(bootcamps);
    }
  }

  return (
    <article>
      <label>
        Filter Bootcamp
        <select
          id="bootcampFilter"
          name="bootcampFilter"
          onChange={(event) => handleChange(event)}
        >
          <option value="all">all</option>
          {bootcampNames.map((bootcampName, index) => (
            <option key={index} value={bootcampName}>
              {bootcampName}
            </option>
          ))}
        </select>
      </label>
      <h2 className="gallery-headline">Gallery</h2>
      <div className="flex-container">
        {filteredBootcamps.map((bootcamp, index) => (
          <BootcampCard
            key={index}
            name={bootcamp.bootcamp}
            instructors={bootcamp.instructors}
            developers={bootcamp.developers}
          />
        ))}
      </div>
    </article>
  );
}
