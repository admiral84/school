const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    prenom: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Veuillez entrer une adresse email valide.",
      ],
    },
    motdepasse: {
      type: String,
      required: true,
      minlength: 6,
    },
    classe: {
      type: String,
      enum: [
        "2eme science1",
        "2eme science2",
        "3eme lettre1",
        "3eme lettre2",
        "3eme eco3",
        "3eme eco4",
        "4eme Tech3",
        "4eme Tech4",
      ],
      default: null, // Optional field
    },
    numero: {
      type: Number,
      min: 1,
      max: 50,
      default: null, // Optional field
    },
    isAdmin: {
      type: Boolean,
      default: false, // By default, a user is not an admin
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

//post schema

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 150,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    tags: {
      type: [String], // Array of strings for tags
      default: [], // Optional field
    },
    isPublished: {
      type: Boolean,
      default: false, // Default to draft status
    },
    publishedAt: {
      type: Date,
      default: null, // Only set when the post is published
    },
  },

  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
