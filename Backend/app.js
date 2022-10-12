import express from "express";
import mongoose from "mongoose";

const app = express();

app.use("/", (req, res) => {
  res.send("Hello, Nsikak!");
});

mongoose.connect("mongodb+srv://admin:Caseis$25@cluster0.3f7a7pr.mongodb.net/morning_brew?retryWrites=true&w=majority").then(()=>app.listen(8080)).then(()=>console.log ("Connected to Database and listenting to local host on Port 8080")).catch((err) =>console.log(err));



// Caseis$25