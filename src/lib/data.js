import { User } from "./models";
import { connectToDB } from "./utils";

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("failed to fetch users");
  }
};

// export const getUser = async (id) => {
//   try {
//     connectToDB();
//     const user = await User.findById(id);
//     return user;
//   } catch (error) {
//     console.log("error while fetching a user");
//     throw new Error("unable to fetch user");
//   }
// };

export const getUser = async (_id) => {
  try {
    connectToDB();
    const user = await User.findById(_id);
    return user;
  } catch (error) {
    console.log("error while fetching a user");
    throw new Error("unable to fetch user");
  }
};

export const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blog");
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
