import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div>
      <form>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={1}
        >
          <Typography padding={3} textAlign="center">
            {isSignup ? <h2>Signup</h2> : <h2>Login</h2>}
          </Typography>
          {isSignup && (
            <TextField placeholder="Enter your name" margin="normal" />
          )}
          <TextField placeholder="Enter your email" margin="normal" />
          <TextField placeholder="Enter your password" margin="normal" />
          <Button>Submit 🚀</Button>
          <Button onClick={() => setIsSignup(!isSignup)}>
            New here? {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
