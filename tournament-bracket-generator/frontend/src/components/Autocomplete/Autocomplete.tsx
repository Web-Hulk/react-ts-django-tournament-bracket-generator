import { Box } from "@mui/material";

// Redundance
interface PlayersDTO extends PlayerType {
  id: number;
}

type PlayerType = {
  first_name: string;
  last_name: string;
  nick_name: string;
  email: string;
};

type Autocomplete = {
  userInput: string;
  suggestionsList: PlayersDTO[];
};

type AutocompleteProps = {
  autocompleteData: Autocomplete;
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
                {first_name} {last_name} ({nick_name})
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
