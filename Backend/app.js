import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

const app = express();
app.use(cors());

// Index Route
// app.use("/", (req, res) => {
//   res.send("Hello, Nsikak!");
// });

app.use(express.json());

// Users Router import
app.use("/users", router);

// Blog router
app.use("/blog", blogRouter);

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
