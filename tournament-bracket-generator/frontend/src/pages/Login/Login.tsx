import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Box>
      <h1>Log in to continue</h1>

      <Box>
        <input type="email" placeholder="Enter you email" />
        <input type="password" placeholder="Password" />
      </Box>

      <Link to={"/forgotpassword"}>Forgot password?</Link>

      <Box>
        <Typography variant="body1">
          Not a member yet? <Link to={"/registration"}>Join</Link>
        </Typography>
      </Box>

      {/* Redirect to /dashboard */}
      <button>Log in</button>
    </Box>
  );
};
