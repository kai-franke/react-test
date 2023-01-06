import "./BootcampsGallery.css";
import BootcampCard from "../BootcampCard/BootcampCard";

export default function BootcampsGallery({ bootcamps }) {
  //const bootcampus = bootcamps.map((bootcamp) => { console.log(bootcamp.bootcamp) })

  return (
    <article>
        <h2>Gallery</h2>
        <div className="flex-container">
      {bootcamps.map((bootcamp, index) => (
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
