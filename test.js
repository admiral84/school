import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-heading mb-6">
        Login
      </h1>
      <form className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
        <div className="mb-4">
          <label
            htmlFor="login"
            className="block text-sm font-semibold text-gray-600"
          >
            Login
          </label>
          <input
            type="text"
            id="login"
            placeholder="Enter your login"
            className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
          />
        </div>
        <Link href="/auth/forgot-password">
          <span className="text-red-500 font-medium flex justify-self-end">
            mot de passe oublié
          </span>
        </Link>
        <button
          type="submit"
          className="w-full h-12 bg-main text-white font-semibold my-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Page;
