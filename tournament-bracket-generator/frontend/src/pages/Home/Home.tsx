import { Link } from "react-router-dom";
import { FAQ } from "../../components/FAQ/FAQ";
import home_title from "../../assets/home_title.jpg";
import home_features from "../../assets/home_features.jpg";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="first-box">
        <h3 className="title">
          <span>Experience the Thrill:</span> <br />
          ING <span>Hubs</span> Poland Tournament - FC24
        </h3>

        <div className="image-container">
          <img className="home-image" src={home_title} alt="Home Image" />
        </div>
      </div>

      <div className="second-box">
        <div className="image-container">
          <img className="home-features" src={home_features} alt="Home Image" />
        </div>

        <div className="features">
          <h3 className="features-title">Features</h3>

          <ul className="features-list">
            <li>
              <strong>Join the Excitement:</strong> Participate in the thrilling
              FC24 Tournament.
            </li>
            <li>
              <strong>Easy Registration:</strong> Simple and quick registration
              process.
            </li>
            <li>
              <strong>Detailed Tournament Info:</strong> Get all information you
              need about the tournament stages, rules and more.
            </li>
            <li>
              <strong>Live Matches:</strong> Stay updated with live matches and
              never miss a moment.
            </li>
            <li>
              <strong>Group Stages:</strong> Navigate through group stages with
              ease and track tournament progress.
            </li>
            <li>
              <strong>Your Voice Matters:</strong> Share your feedback and help
              us to improve experience.
            </li>
            <li>
              <strong>Fair Play:</strong> We believe in fair play. Enjoy the
              game and respect all participants.
            </li>
          </ul>
        </div>
      </div>

      <div className="call-to-action-box">
        <h3 className="title">Get Started</h3>

        <p>Ready to kick off your FC 24 tournament experience?</p>

        <button className="call-to-action-button">
          <Link to={"/players-registration"} className="cta-link">
            Register Now
          </Link>
        </button>
      </div>

      <FAQ />

      <footer className="footer">© 2024 ING Hubs Poland - FC24</footer>
    </div>
  );
};
