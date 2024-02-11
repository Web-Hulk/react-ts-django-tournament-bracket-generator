import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import home_features from "../../assets/home_features.jpg";
import home_title from "../../assets/home_title.jpg";
import { FAQ } from "../../components/FAQ/FAQ";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="first-box">
        <div className="text">
          <h2 className="title">Join the FC24 Tournament!</h2>
          <p className="description">
            Register, compete and keep track of all match data in one place.
            Your journey to glory start here!
          </p>
        </div>

        <div className="image-container">
          <img className="home-image" src={home_title} alt="Home Image" />
        </div>
      </div>

      <div className="second-box">
        <div className="image-container">
          <img className="home-features" src={home_features} alt="Home Image" />
        </div>

        <div className="features">
          <h2 className="features-title">Features</h2>

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
        <p>
          Ready to <strong>kick off</strong> your FC 24 tournament experience?
        </p>

        <Link to={"/players-registration"}>
          <Button variant="contained" className="call-to-action-button">
            Register Now
          </Button>
        </Link>
      </div>

      <FAQ />
    </div>
  );
};
