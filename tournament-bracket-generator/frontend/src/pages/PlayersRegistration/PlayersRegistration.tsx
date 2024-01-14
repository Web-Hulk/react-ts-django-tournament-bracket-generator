import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface PlayersDTO {}

type PlayerType = {
  first_name: string;
  last_name: string;
  nick_name: string;
  email: string;
};

// Allow Form Customization - Adding Fields like text input, select, etc.,
export const PlayersRegistration = () => {
  const [players, setPlayers] = useState<PlayersDTO[]>([]);
  const [formData, setFormData] = useState<PlayerType>({
    first_name: "",
    last_name: "",
    nick_name: "",
    email: "",
  });

  const getData = () => {
    axios
      .get("http://127.0.0.1:8000/players/")
      .then((response) => {
        console.log("response: ", response.data);
        setPlayers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitButton = () => {
    console.log("POST params: ", formData);

    axios
      .post("http://127.0.0.1:8000/create-player/", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Players Registration</h1>

      <Box>
        <input
          type="text"
          name="first_name"
          placeholder="Enter you name"
          onChange={handleInput}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Enter your surname"
          onChange={handleInput}
        />
        <input
          type="text"
          name="nick_name"
          placeholder="Enter your nickname"
          onChange={handleInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleInput}
        />
        {/* <select>
        <option>D&CS</option>
      </select> */}

        <button type="button" onClick={handleSubmitButton}>
          Submit
        </button>
      </Box>
    </>
  );
};
