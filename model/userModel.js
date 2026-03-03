// ========================
//     models/User.js
// ========================
// A Model defines the shape of your data in MongoDB.
// Think of it as a blueprint for every user document in the database.
// We use Mongoose to create models — it makes working with MongoDB much easier.

const mongoose = require("mongoose");

// ---- Schema ----
// A Schema defines what fields a User document has and their rules.
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],   // Validation: field must exist
      trim: true,                              // Removes accidental spaces
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,                            // No two users can have the same email
      lowercase: true,                         // Always saves as lowercase
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  {
    timestamps: true, // Automatically adds: createdAt and updatedAt fields
  }
);

// ---- Model ----
// A Model is the actual class we use to CREATE, READ, UPDATE, DELETE documents.
// mongoose.model("User", userSchema) tells Mongoose:
//   → Create a collection called "users" (lowercased + plural)
//   → Each document follows userSchema

const User = mongoose.model("User", userSchema);

module.exports = User;