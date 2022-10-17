import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";

const AddBlog = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios.post ("http://localhost:8080/blog/add")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          padding={5}
          margin={5}
          display="flex"
          flexDirection={"column"}
          width={"100%"}
        >
          <Typography>
            <h1>Add New Post</h1>
            <InputLabel>Title</InputLabel>
            <TextField
              name="title"
              onChange={handleChange}
              value={inputs.title}
              margin="normal"
            />
            <InputLabel>Image Url:</InputLabel>
            <TextField
              name="imageURL"
              onChange={handleChange}
              value={inputs.imageURL}
              margin="normal"
            />
            <InputLabel>Start writting</InputLabel>
            <TextField
              name="description"
              onChange={handleChange}
              value={inputs.description}
              margin="normal"
            />
            <Button type="submit"> Post </Button>
          </Typography>
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;
