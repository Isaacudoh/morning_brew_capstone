import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    
  title: {
    type: "string",
    required: true,
  },

  image: {
    type: "string",
    required: true,
  },

  user: {
    type: "string",
    required: true,
  },
});

export default mongoose.model("Blog", blogSchema);
