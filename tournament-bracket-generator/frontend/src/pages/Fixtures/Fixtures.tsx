import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getData } from "../../api/axios";
import { Fixture } from "../../components/Fixtures/Fixture";
import { FixtureFilters } from "../../components/Fixtures/FixtureFilters";
import { FixtureProps } from "../../types";
import "./Fixtures.scss";

const STAGE_ORDER: string[] = ["G", "QF", "SF", "3P", "F"];

export const Fixtures = () => {
  const [fixtures, setFixtures] = useState<FixtureProps[]>([]);
  const [filteredFixtures, setFilteredFixtures] = useState<FixtureProps[]>([]);
  const [stage, setStage] = useState<string>("");

  const filterFixturesByStage = useCallback(
    (stage: string) => {
      const filtered = stage
        ? fixtures.filter((fixture) => fixture.stage === stage)
        : fixtures;

      filtered.sort(
        (a, b) => STAGE_ORDER.indexOf(a.stage) - STAGE_ORDER.indexOf(b.stage)
      );

      setStage(stage);
      setFilteredFixtures(filtered);
    },
    [fixtures]
  );

  const getFixtures = () => {
    getData("fixtures/")
      .then((response) => {
        console.log("Fixtures: ", response.data.results);
        setFixtures(response.data.results);
        setFilteredFixtures(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFixtures();
  }, []);

  useEffect(() => {
    filterFixturesByStage(stage);
  }, [fixtures]);

  return (
    <Box className="fixtures-container">
      <FixtureFilters
        stage={stage}
        filterFixturesByStage={filterFixturesByStage}
      />

      <Box className="fixture-container">
        {filteredFixtures.map(
          (
            {
              player,
              opponent,
              player_goals_1st_leg,
              player_goals_2nd_leg,
              opponent_goals_1st_leg,
              opponent_goals_2nd_leg,
              stage,
              status,
              match_number,
            },
            index
          ) => (
            <Fixture
              key={`Stage -${index}`}
              player={player}
              opponent={opponent}
              player_goals_1st_leg={player_goals_1st_leg}
              player_goals_2nd_leg={player_goals_2nd_leg}
              opponent_goals_1st_leg={opponent_goals_1st_leg}
              opponent_goals_2nd_leg={opponent_goals_2nd_leg}
              stage={stage}
              status={status}
              match_number={match_number}
            />
          )
        )}
      </Box>
    </Box>
  );
};
