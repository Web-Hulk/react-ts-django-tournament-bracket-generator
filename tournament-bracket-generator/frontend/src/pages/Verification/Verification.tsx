import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Verification = () => {
  return (
    <Box>
      <h1>Email address verified</h1>
      <p>Finish setting up your account</p>

      <Box>
        <label>Full name</label>
        <input type="text" placeholder="Enter full name" />
      </Box>

      <Box>
        <label>Password</label>
        <input type="password" placeholder="Create password" />
      </Box>

      <Link to={"/create-tournament"}>Continue</Link>
    </Box>
  );
};
