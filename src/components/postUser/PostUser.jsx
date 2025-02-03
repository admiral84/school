import React from "react";
import { getUser } from "@/lib/data";

async function PostUser({ _id }) {
  const user = await getUser(_id);
  if (!user) {
    return (
      <div className="text-center text-red-500 mt-4">
        <p>Failed to load user data.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
      <div className="mt-2">
        <span className="block text-gray-600 text-sm font-medium">
          Username: <span className="text-gray-800">{user.nom}</span>
        </span>
        <span className="block text-gray-600 text-sm font-medium mt-1">
          Email: <span className="text-gray-800">{user.email}</span>
        </span>
      </div>
    </div>
  );
}

export default PostUser;
