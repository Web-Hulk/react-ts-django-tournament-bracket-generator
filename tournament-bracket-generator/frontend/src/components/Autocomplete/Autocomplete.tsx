import { Box, debounce } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AutocompleteData, PlayerDTO } from "../../types";

export const Autocomplete = () => {
  const [players, setPlayers] = useState<PlayerDTO[]>([]);
  const [autocompleteData, setAutocompleteData] = useState<AutocompleteData>({
    userInput: "",
    suggestionsList: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://127.0.0.1:8000/players/")
      .then((response) => {
        console.log("getData response: ", response.data);
        setPlayers(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Debounce effect!
  const handleAutocomplete = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("players: ", players);
      const { value } = e.target;

      // Filter the players based on the user's input
      let filteredPlayers = players.filter(
        ({ first_name, last_name, nick_name }) =>
          `${first_name} ${last_name} ${nick_name}`
            .toLowerCase()
            .includes(value.toLowerCase())
      );

      if (value.length === 0) {
        filteredPlayers = [];
      }

      setAutocompleteData({
        userInput: value,
        suggestionsList: filteredPlayers,
      });
    },
    500
  );

  return (
    <Box>
      <p>Autocomplete</p>

      <input
        type="text"
        name="userInput"
        placeholder="Find a player"
        onChange={handleAutocomplete}
      />

      {autocompleteData.suggestionsList.length > 0 ? (
        <ul>
          {autocompleteData.suggestionsList.map(
            ({ id, first_name, last_name, nick_name }) => (
              <li key={id}>
                <Link to={`/player-details/${id}`}>
                  {first_name} {last_name} ({nick_name})
                </Link>
              </li>
            )
          )}
        </ul>
      ) : autocompleteData.userInput ? (
        <Box>
          <em>No suggestions available.</em>
        </Box>
      ) : null}
    </Box>
  );
};
