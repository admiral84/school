import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ email: credentials.email });
    if (!user) {
      console.log("no user with this email");
      throw new Error("no user with this email");
    }
    const isPasswordCorrect = await bcrypt.compare(
      credentials.motdepasse,
      user.motdepasse
    );
    if (!isPasswordCorrect) {
      console.log("incorrect password");
      throw new Error("incorrect password");
    }
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("failed to login");
  }
};

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
});
