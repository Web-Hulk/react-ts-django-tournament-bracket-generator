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

type AutocompleteProps = {
  suggestionsList: PlayersDTO[];
  handleAutocomplete: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Autocomplete = ({
  suggestionsList,
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

      {suggestionsList.length > 0 ? (
        <ul>
          {suggestionsList.map(({ id, first_name, last_name, nick_name }) => (
            <li key={id}>
              {first_name} {last_name} ({nick_name})
            </li>
          ))}
        </ul>
      ) : (
        <Box>
          <em>No suggestions available.</em>
        </Box>
      )}
    </Box>
  );
};
