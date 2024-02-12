// Player
export interface PlayerDTO extends Player {
  id: number;
}

export type Player = {
  first_name: string;
  last_name: string;
  nick_name: string;
};

// Autocomplete.tsx
export type AutocompleteData = {
  userInput: string;
  suggestionsList: PlayerDTO[];
};

// GroupStage
export type Group = {
  player: PlayerDTO;
  group_name: string;
  matches_played: number;
  wins: number;
  draws: number;
  loses: number;
  goals_for: number;
  goals_against: number;
  goals_difference: number;
  points: number;
  qualified: boolean;
};

export type Groups = {
  [key: string]: Group;
};

// PlayerRegistation
export type FormErrorType = {
  first_name_error: string;
  last_name_error: string;
  nick_name_error: string;
};