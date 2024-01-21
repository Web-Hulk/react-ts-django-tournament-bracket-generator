export interface PlayerDTO extends Player {
  id: number;
}

export type Player = {
  first_name: string;
  last_name: string;
  nick_name: string;
  email: string;
};

export type AutocompleteData = {
  userInput: string;
  suggestionsList: PlayerDTO[];
};