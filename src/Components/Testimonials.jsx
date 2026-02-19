import "../App.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Users Say</h2>

      <div className="testimonials-container">
        <div className="testimonial-card">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Brian"
            className="testimonial-img"
          />
          <p className="testimonial-text">
            "I found my lost laptop within 2 days!"
          </p>
          <h4 className="testimonial-name">Brian K.</h4>
          <span className="testimonial-role">Student</span>
        </div>

        <div className="testimonial-card">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Sarah"
            className="testimonial-img"
          />
          <p className="testimonial-text">
            "Posting a found phone was so easy."
          </p>
          <h4 className="testimonial-name">Sarah M.</h4>
          <span className="testimonial-role">Campus Staff</span>
        </div>

        <div className="testimonial-card">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Daniel"
            className="testimonial-img"
          />
          <p className="testimonial-text">
            "Simple and effective platform."
          </p>
          <h4 className="testimonial-name">Daniel O.</h4>
          <span className="testimonial-role">Lecturer</span>
        </div>
      </div>
    </section>
  );
}
