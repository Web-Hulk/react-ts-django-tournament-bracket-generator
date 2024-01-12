import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Registration = () => {
  return (
    <Box>
      <h1>Sign up to continue</h1>

      <Box>
        <input type="email" placeholder="Enter you email" />
      </Box>

      <button>Sign up</button>
      <Link to={"/login"}>Already have an Atlassian account? Log in</Link>
    </Box>
  );
};
