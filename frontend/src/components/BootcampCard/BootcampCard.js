import BootcampCardName from "../BootcampCardName/BootcampCardName";
import "./BootcampCard.css";

export default function BootcampCard({ name, instructors, developers }) {
  return (
    <section className="bootcamp">
      <h3>{name}</h3>
      <h4>Instructors:</h4>
      <ul>
        {instructors &&
          instructors.map((instructor) => (
            <BootcampCardName key={instructor.id} role={instructor} />
          ))}
      </ul>
      <h4>Developers:</h4>
      <ul className="--dev">
        {developers &&
          developers.map((developer) => (
            <BootcampCardName key={developer.id} role={developer} />
          ))}
      </ul>
    </section>
  );
}
