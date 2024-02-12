import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getData, postData } from "../../api/axios";
import { Player } from "../../types";
import "./PlayersRegistration.scss";
import { Link } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";

const RegistrationClosed = () => {
  return (
    <>
      <h2 className="registration__title">
        Registration for this tournament is closed. Stay tuned for the next one!
      </h2>

      <Link to={"/"}>
        <Button variant="contained" className="registration__home-button">
          Back Home
        </Button>
      </Link>
    </>
  );
};

const SuccessfullFormSubmission = () => {
  return (
    <>
      <Box className="registration__done-icon">
        <DoneIcon />
      </Box>

      <h2 className="registration__title">Thank you for submitting!</h2>
      <p className="registration__description">
        You have successfully submitted. We will let you know when we launch.
      </p>

      <Link to={"/"}>
        <Button variant="contained" className="registration__home-button">
          Done
        </Button>
      </Link>
    </>
  );
};

export const PlayersRegistration = () => {
  const [formData, setFormData] = useState<Player>({
    first_name: "",
    last_name: "",
    nick_name: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isRegistrationOpened, setIsRegistrationOpened] =
    useState<boolean>(false);

  const getRegistrationStatus = () => {
    getData("registration-status/")
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

    postData("create-player/", formData)
      .then((response) => {
        console.log(response);
        setIsFormSubmitted(true);
        setFormData({
          first_name: "",
          last_name: "",
          nick_name: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box className="registration-container">
      {isRegistrationOpened ? (
        <>
          {isFormSubmitted ? (
            <SuccessfullFormSubmission />
          ) : (
            <>
              <h2 className="registration__title">
                Step into the Arena: <br />
                Sign Up for the Ultimate Gaming Showdown!
              </h2>

              <Box className="registration__inputs-container">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Name"
                  onChange={handleInput}
                  className="registration__input"
                />

                <input
                  type="text"
                  name="last_name"
                  placeholder="Surname"
                  onChange={handleInput}
                  className="registration__input"
                />

                <input
                  type="text"
                  name="nick_name"
                  placeholder="Nickname"
                  onChange={handleInput}
                  className="registration__input"
                />

                <Button
                  variant="contained"
                  type="button"
                  onClick={handleSubmitButton}
                  className="registration__submit-button"
                >
                  Submit
                </Button>
              </Box>
            </>
          )}
        </>
      ) : (
        <RegistrationClosed />
      )}
    </Box>
  );
};
