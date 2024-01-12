import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <Box>
      <h1>Can't log in?</h1>
      <p>We'll send a recovery link to</p>
      <input type="email" placeholder="Enter email" />
      <button>Send recovery link</button>
      <Link to="/login">Return to log in</Link>
    </Box>
  );
};
