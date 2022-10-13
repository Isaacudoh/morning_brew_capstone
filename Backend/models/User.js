import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  blogs:[{type: mongoose.Types.ObjectId, ref: "Blog", required: true}]
});

// export to MongoDB stored as users
export default mongoose.model("User", userSchema);
