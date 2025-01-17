import { User } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDB();
    const users = await User.find();
    return NextResponse.json(users);
  } catch (err) {
    console.log(err);
    throw new Error("something went wrong");
  }
};
