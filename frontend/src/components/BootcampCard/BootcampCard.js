import "./BootcampCard.css";

export default function BootcampCard({ name, instructors, developers }) {
  return (
    <section className="bootcamp">
      <h3>{name}</h3>
      <h4>Instructors:</h4>
      <ul>
        {instructors &&
          instructors.map((instructor) => (
            <li key={instructor.id}>{instructor.name}</li>
          ))}
      </ul>
      <h4>Developers:</h4>
      <ul className="--dev">
        {developers &&
          developers.map((developer) => (
            <li key={developer.id}>{developer.name}</li>
          ))}
      </ul>
    </section>
  );
}
