import CircleIcon from "@mui/icons-material/Circle";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Button } from "@mui/material";
import "./PlayerDetails.scss";

export const PlayerDetails = () => {
  return (
    <Box className="player-details-container">
      <Box className="player-details__header">
        <Box className="header-container">
          <Box className="header__icon">
            <PersonIcon />
          </Box>

          <Box>
            <p className="header__item-title">
              <strong>John Doe</strong>
            </p>
            <p className="header__item-value">
              <strong>Doey1</strong>
            </p>
          </Box>
        </Box>
        <Button variant="outlined">Compare</Button>
      </Box>

      <Box className="player-details__stats">
        <Button variant="outlined" className="stats__button">
          Overview
        </Button>

        <Box className="stats__first-box stats__item">
          <p className="stats__item-key">Matches Played</p>
          <p className="stats__item-value">
            <strong>0</strong>
          </p>
        </Box>

        <Box className="stats__second-box">
          <Box className="stats__item">
            <p className="stats__item-key">Wins</p>
            <p className="stats__item-value">
              <strong>0</strong>
            </p>
          </Box>

          <Box className="stats__item">
            <p className="stats__item-key">Draws</p>
            <p className="stats__item-value">
              <strong>0</strong>
            </p>
          </Box>

          <Box className="stats__item">
            <p className="stats__item-key">Loses</p>
            <p className="stats__item-value">
              <strong>0</strong>
            </p>
          </Box>
        </Box>

        <Box className="stats__third-box">
          <Box className="stats__item">
            <p className="stats__item-key">Goals For</p>
            <p className="stats__item-value">
              <strong>0</strong>
            </p>
          </Box>

          <Box className="stats__item">
            <p className="stats__item-key">Goals Against</p>
            <p className="stats__item-value">
              <strong>0</strong>
            </p>
          </Box>

          <Box className="stats__item">
            <p className="stats__item-key">Goals Difference</p>
            <p className="stats__item-value">
              <strong>0</strong>
            </p>
          </Box>
        </Box>

        <Box className="stats__fourth-box stats__item">
          <p className="stats__item-key">Current Stage</p>
          <p className="stats__item-value">
            <strong>Group</strong>
          </p>
        </Box>
      </Box>

      <Box className="player-details__fixtures">
        <Box className="stats__item">
          <p className="stats__item-key">Last Fixtures</p>

          <Box className="fixture-box">
            <Box>
              <p>
                <span className="stats__item-key">Stage:</span>{" "}
                <strong>Group</strong>
              </p>
            </Box>

            <Box className="fixture-box__score">
              <p className="fixture-box__player">
                John Doe <span>3</span>
              </p>
              <p className="delimeter">-</p>
              <p className="fixture-box__player">
                <span>0</span> Bob Johnson
              </p>
            </Box>

            <CircleIcon className="win" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
