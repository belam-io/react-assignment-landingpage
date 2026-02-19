import Card from "./Card";
import "../App.css";

export default function Services() {
  return (
    <section className="services-container">
      <Card
        image="https://images.unsplash.com/photo-1586769852044-692d6e3703f0"
        title="Post Lost Item"
        subtititle="Help someone recover what they lost"
        description="Post details of a lost item to increase recovery chances."
      />

      <Card
        image="https://images.unsplash.com/photo-1607082349566-187342175e2f"
        title="Report Found Item"
        subtititle="Found something?"
        description="Upload item details and location."
      />

      <Card
        image="https://images.unsplash.com/photo-1508780709619-79562169bc64"
        title="Search Items"
        subtititle="Browse listings"
        description="Search through posted lost & found items."
      />
    </section>
  );
}
