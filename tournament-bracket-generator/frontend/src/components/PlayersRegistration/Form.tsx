import { Box, Button } from "@mui/material";
import { FormErrorType } from "../../types";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import classNames from "classnames";

type FormProps = {
  formErrors: FormErrorType;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitButton: () => void;
};

export const Form = ({
  formErrors,
  handleInput,
  handleSubmitButton,
}: FormProps) => {
  return (
    <>
      <h2 className="registration__title">
        Step into the Arena: <br />
        Sign Up for the Ultimate Gaming Showdown!
      </h2>

      <Box className="registration__inputs-container">
        <Box className="input-container">
          <input
            type="text"
            name="first_name"
            placeholder="Name"
            onChange={handleInput}
            className={classNames("input", {
              error: formErrors.first_name_error,
            })}
          />
          {formErrors.first_name_error && <HighlightOffIcon />}

          <span
            className={classNames({
              "text-error": formErrors.first_name_error,
            })}
          >
            {formErrors.first_name_error}
          </span>
        </Box>

        <Box className="input-container">
          <input
            type="text"
            name="last_name"
            placeholder="Surname"
            onChange={handleInput}
            className={classNames("input", {
              error: formErrors.last_name_error,
            })}
          />
          {formErrors.last_name_error && <HighlightOffIcon />}

          <span
            className={classNames({
              "text-error": formErrors.last_name_error,
            })}
          >
            {formErrors.last_name_error}
          </span>
        </Box>

        <Box className="input-container">
          <input
            type="text"
            name="nick_name"
            placeholder="Nickname"
            onChange={handleInput}
            className={classNames("input", {
              error: formErrors.nick_name_error,
            })}
          />
          {formErrors.nick_name_error && <HighlightOffIcon />}

          <span
            className={classNames({
              "text-error": formErrors.nick_name_error,
            })}
          >
            {formErrors.nick_name_error}
          </span>
        </Box>

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
  );
};
