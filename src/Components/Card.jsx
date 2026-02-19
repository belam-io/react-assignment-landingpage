export default function Card({ title, description, subtititle, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p className="card-subtitle">{subtititle}</p>
      <p>{description}</p>
    </div>
  );
}
