import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface PlayerDetailsDTO {
  group: string;
  match_number: number;
  opponent: string;
  opponent_goals_1st_leg: number;
  opponent_goals_2nd_leg: number;
  player: string;
  player_goals_1st_leg: number;
  player_goals_2nd_leg: number;
  stage: string;
  status: string;
}

// Show user stats, not only Fixtures
export const PlayerDetails = () => {
  const [data, setData] = useState<PlayerDetailsDTO[]>([]);
  const { id } = useParams();

  const getData = () => {
    axios.get(`http://127.0.0.1:8000/player-details/${id}`).then((response) => {
      console.log(response.data.results);
      setData(response.data.results);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Player Details</h1>

      {data.map(
        (
          {
            group,
            match_number,
            player,
            player_goals_1st_leg,
            player_goals_2nd_leg,
            opponent,
            opponent_goals_1st_leg,
            opponent_goals_2nd_leg,
            stage,
            status,
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
            <p>Match: {match_number}</p>
            <p>Group: {group}</p>
            <p>Stage: {stage}</p>
            <p>Status: {status}</p>
            <p>{player}</p>
            <p>{player_goals_1st_leg}</p>
            <p>{player_goals_2nd_leg}</p>
            <p>{opponent}</p>
            <p>{opponent_goals_1st_leg}</p>
            <p>{opponent_goals_2nd_leg}</p>
          </div>
        )
      )}
    </div>
  );
};
