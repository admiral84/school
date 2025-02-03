"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
const bcrypt = require("bcrypt");
import { connectToDB } from "./utils";

export const addPost = async (formData) => {
  const { author, title, content } = Object.fromEntries(formData);
  const slug = title.replace(" ", "-");
  try {
    connectToDB();
    const newPost = new Post({
      author,
      title,
      content,
      slug,
    });
    await newPost.save();
    console.log("post save to db");
  } catch (err) {
    console.log(err);
    return { error: "can't create new post" };
  }
};

export const register = async (previousState, formData) => {
  const { nom, prenom, email, motdepasse, retapermotdepasse, classe, numero } =
    Object.fromEntries(formData);
  console.log("Form values:", {
    nom,
    prenom,
    email,
    motdepasse,
    retapermotdepasse,
    classe,
    numero,
  });
  if (motdepasse !== retapermotdepasse) {
    return { error: "password not match" };
  }
  try {
    await connectToDB();
    const user = await User.findOne({ email });
    if (user) {
      return { error: "user already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(motdepasse, salt);

    const newUser = new User({
      nom,
      prenom,
      email,
      motdepasse: hashedPassword,

      classe,
      numero,
    });
    await newUser.save();
    console.log("user saved to db");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "something went wrong when saving a user in the db" };
  }
};

export const login = async (previousState, formData) => {
  const { email, motdepasse } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { email, motdepasse });
  } catch (err) {
    console.log(err);

    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return { error: "email ou mot de passe incorrect", status: "error" };
        case "CredentialsSignin":
          throw err;
        default:
          throw err;
      }
    }
  }
};
