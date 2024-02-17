import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getData } from "../../api/axios";
import { Fixture } from "../../components/Fixtures/Fixture";
import { FixtureFilters } from "../../components/Fixtures/FixtureFilters";
import { FixtureDTO } from "../../types";
import "./Fixtures.scss";

const STAGE_ORDER: string[] = ["G", "QF", "SF", "3P", "F"];

export const Fixtures = () => {
  const [fixtures, setFixtures] = useState<FixtureDTO[]>([]);
  const [filteredFixtures, setFilteredFixtures] = useState<FixtureDTO[]>([]);
  const [stage, setStage] = useState<string>("");
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);

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
        setIsDataLoading(true);
        console.log("Fixtures: ", response.data.results);
        setFixtures(response.data.results);
        setFilteredFixtures(response.data.results);
        setIsDataLoading(false);
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
  }, [fixtures, filterFixturesByStage, stage]);

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
              isDataLoading={isDataLoading}
            />
          )
        )}
      </Box>
    </Box>
  );
};
