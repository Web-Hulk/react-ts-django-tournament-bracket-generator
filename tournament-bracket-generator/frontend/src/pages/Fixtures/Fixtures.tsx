import { useEffect, useState } from "react";
import { getData } from "../../api/axios";
import { Autocomplete } from "../../components/Autocomplete/Autocomplete";

interface FixturesDTO {
  player: number;
  opponent: number;
  player_goals_1st_leg: number;
  opponent_goals_1st_leg: number;
  stage: string;
}

const FILTER_BUTTONS = [
  { name: "All", value: "" },
  { name: "Group", value: "G" },
  { name: "Quarter-finals", value: "QF" },
  { name: "Semi-finals", value: "SF" },
  { name: "3rd place", value: "3P" },
  { name: "Final", value: "F" },
];

export const Fixtures = () => {
  const [fixtures, setFixtures] = useState<FixturesDTO[]>([]);
  const [filteredFixtures, setFilteredFixtures] = useState<FixturesDTO[]>([]);

  useEffect(() => {
    getData("fixtures/")
      .then((response) => {
        console.log("Fixtures: ", response.data.results);
        setFixtures(response.data.results);
        setFilteredFixtures(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filterMatchesByStage = (stage: string) => {
    if (stage) {
      const filterMatchesByStage = fixtures.filter(
        (fixture) => fixture.stage === stage
      );
      setFilteredFixtures(filterMatchesByStage);
    } else {
      setFilteredFixtures(fixtures);
    }
  };

  return (
    <div>
      <h1>Matches</h1>

      <Autocomplete />

      <div>
        {FILTER_BUTTONS.map(({ name, value }) => (
          <button
            key={`Filter - ${name}`}
            type="button"
            onClick={() => filterMatchesByStage(value)}
          >
            {name}
          </button>
        ))}
      </div>

      {filteredFixtures.map(
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