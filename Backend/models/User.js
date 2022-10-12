import mongoose from "mongoose";

const Schema = mongoose.Schema;

constuserSchema = new Schema({

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
});

// export to MongoDB stored as users
export default mongoose.model('User', Schema);
