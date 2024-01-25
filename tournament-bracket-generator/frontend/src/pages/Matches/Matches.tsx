import axios from "axios";
import { useEffect, useState } from "react";

interface FixturesDTO {
  player: number;
  opponent: number;
  player_goals_1st_leg: number;
  opponent_goals_1st_leg: number;
  stage: string;
}

export const Matches = () => {
  const [fixtures, setFixtures] = useState<FixturesDTO[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/fixtures/")
      .then((response) => {
        console.log("Fixtures: ", response.data.results);
        setFixtures(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Matches</h1>

      {fixtures.map(
        (
          {
            player,
            opponent,
            player_goals_1st_leg,
            opponent_goals_1st_leg,
            stage,
          },
          index
        ) => (
          <div
            key={`Stage -${index}`}
            style={{
              width: "50%",
              margin: "0 auto",
              border: "1px solid gray",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Stage: {stage}</p>
            <p>{player}</p>
            <p>{player_goals_1st_leg}</p>
            <p>{opponent}</p>
            <p>{opponent_goals_1st_leg}</p>
          </div>
        )
      )}
    </div>
  );
};
