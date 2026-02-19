import '../App.css';
import BannerImage from '../assets/images/lo.webp';

export default function Banner() {
  return (
    <section className="banner">
      <img src={BannerImage} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h1>Lost Something? We Help You Find It.</h1>
        <p>Your campus lost & found solution.</p>
        <a href="#" className="banner-button">Get Started</a>
      </div>
    </section>
  );
}
