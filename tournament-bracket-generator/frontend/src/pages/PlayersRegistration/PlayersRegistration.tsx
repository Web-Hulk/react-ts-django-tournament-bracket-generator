import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Player } from "../../types";

export const PlayersRegistration = () => {
  const [formData, setFormData] = useState<Player>({
    first_name: "",
    last_name: "",
    nick_name: "",
    email: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isRegistrationOpened, setIsRegistrationOpened] =
    useState<boolean>(false);

  const getRegistrationStatus = () => {
    axios
      .get("http://127.0.0.1:8000/registration-status/")
      .then((response) => {
        console.log(
          "getRegistrationStatus response: ",
          response.data.results[0].status
        );
        setIsRegistrationOpened(response.data.results[0].status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRegistrationStatus();
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
        setIsFormSubmitted(true);
        setFormData({
          first_name: "",
          last_name: "",
          nick_name: "",
          email: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Players Registration</h1>

      {/* Refactor this part - it is worth to split this whole part below! */}
      {isRegistrationOpened ? (
        <>
          {isFormSubmitted ? (
            <Box>
              Your registration form has been successfully submitted. We're
              excited to have you join us. Stay tuned for further updated!
            </Box>
          ) : (
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

              {/* When Submit added records is not available in autocomplete */}
              <button type="button" onClick={handleSubmitButton}>
                Submit
              </button>
            </Box>
          )}
        </>
      ) : (
        <Box>
          We’re sorry, but registration for this tournament has closed. We’d
          love to see you in the next one, so stay tuned for updates!
        </Box>
      )}
    </>
  );
};
