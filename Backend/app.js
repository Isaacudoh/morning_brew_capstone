import express from "express";
import mongoose from "mongoose";

const app = express();

// Index Route
app.use("/", (req, res) => {
  res.send("Hello, Nsikak!");
});

// Database conection
mongoose
  .connect(
    "mongodb+srv://admin:Caseis$25@cluster0.3f7a7pr.mongodb.net/morning_brew?retryWrites=true&w=majority"
  )
  .then(() => app.listen(8080))
  .then(() =>
    console.log(
      "You have a Connection to Database and listenting to local host on Port 8080 ✅✅✅✅✅ "
    )
  )
  .catch((err) => console.log(err));

  
