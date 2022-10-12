import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(8080);
