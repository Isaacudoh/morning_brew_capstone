import React, { useState } from "react";
import { Box, Button, inputClasses, TextField, Typography } from "@mui/material";

const Auth = () => {
  const [inputs, setInputs] = useState({
    name: "", email: "", password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState)=> ({
      prevState,
      [e.target.name] : e.target.value
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            <TextField name="name" onChange={handleChange} value={inputs.name}placeholder="Enter your name" margin="normal" />
          )}
          <TextField name="email" onChange={handleChange} value={inputs.email}placeholder="Enter your email" margin="normal" />
          <TextField name="password" onChange={handleChange} value={inputs.password}placeholder="Enter your password" margin="normal" />
          <Button type="submit"> Submit 🚀</Button>
          <Button onClick={() => setIsSignup(!isSignup)}>
            New here? {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
