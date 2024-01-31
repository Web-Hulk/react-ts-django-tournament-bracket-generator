import { Box } from "@mui/material";
import { AutocompleteData } from "../../types";
import { Link } from "react-router-dom";

type AutocompleteProps = {
  autocompleteData: AutocompleteData;
  handleAutocomplete: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Autocomplete = ({
  autocompleteData,
  handleAutocomplete,
}: AutocompleteProps) => {
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
