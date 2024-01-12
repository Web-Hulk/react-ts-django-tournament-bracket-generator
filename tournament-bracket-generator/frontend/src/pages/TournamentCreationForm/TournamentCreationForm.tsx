import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

type TournamentType = {
  name: string;
  date: string;
  location: string;
  number_of_players: number;
  type: "single" | "double" | "round-robin";
};

export const TournamentCreationForm = () => {
  const [formData, setFormData] = useState<TournamentType>({
    name: "",
    date: "",
    location: "",
    number_of_players: 0,
    type: "single",
  });
  const [
    isPlayerRegistrationLinkDisplayed,
    setIsPlayerRegistrationLinkDisplayed,
  ] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateButton = () => {
    setIsPlayerRegistrationLinkDisplayed(true);

    axios
      .post("http://127.0.0.1:8000/players/create-tournament/", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box>
      <h1>Tournament Creation Form</h1>

      <Box>
        <input
          type="text"
          name="name"
          placeholder="Tournament Name"
          onChange={handleInput}
        />
        <input
          type="date"
          name="date"
          placeholder="Tournament Date"
          onChange={handleInput}
        />
        <input
          type="text"
          name="location"
          placeholder="Tournament Location"
          onChange={handleInput}
        />
        <input
          type="number"
          name="number_of_players"
          placeholder="Maximum number of players"
          onChange={handleInput}
          defaultValue={formData.number_of_players}
        />
        <select name="type" onChange={handleSelect}>
          <option value={"single"}>Single Elimination</option>
          <option value={"double"}>Double Elimination</option>
          <option value={"round-robin"}>Round Robin</option>
        </select>

        {/* Generate link and QR Code to share when onClick  */}
        <button type="button" onClick={handleCreateButton}>
          Create
        </button>
      </Box>

      {isPlayerRegistrationLinkDisplayed ? (
        <Link to={"/players-registration"}>Players Registration</Link>
      ) : null}
    </Box>
  );
};
