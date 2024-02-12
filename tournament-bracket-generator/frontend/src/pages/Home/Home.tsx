import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import home_features from "../../assets/home_features.jpg";
import home_title from "../../assets/home_title.jpg";
import { FAQ } from "../../components/FAQ/FAQ";
import "./Home.scss";
import { LIST_ITEMS } from "./data/listItemsData";

export const Home = () => {
  return (
    <Box className="home-container">
      <Box mb={5} className="first-box">
        <Box className="text">
          <h2 className="title">Join the FC24 Victory Cup!</h2>

          <Typography className="description">
            Register, compete and keep track of all match data in one place.
            Your journey to glory start here!
          </Typography>
        </Box>

        <Box className="image-container">
          <img className="home-image" src={home_title} alt="Home Image" />
        </Box>
      </Box>

      <Box mb={5} className="second-box">
        <Box className="image-container">
          <img className="home-features" src={home_features} alt="Home Image" />
        </Box>

        <Box className="features">
          <h2 className="features-title">Features</h2>

          <ul className="features-list">
            {LIST_ITEMS.map(({ title, description }) => (
              <li>
                <strong>{title}</strong> {description}
              </li>
            ))}
          </ul>
        </Box>
      </Box>

      <Box mb={5} className="call-to-action-box">
        <Typography sx={{ mb: "12px" }}>
          Ready to <strong>kick off</strong> your FC 24 tournament experience?
        </Typography>

        <Link to={"/players-registration"}>
          <Button variant="contained" className="call-to-action-button">
            Register Now
          </Button>
        </Link>
      </Box>

      <FAQ />
    </Box>
  );
};
