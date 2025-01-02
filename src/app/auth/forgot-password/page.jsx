import React from "react";

function Page() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-heading mb-6">
        Email
      </h1>
      <form className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Insert your email"
            className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
          />
        </div>
        <button
          type="submit"
          className="w-full h-12 bg-main text-white font-semibold my-4 rounded"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Page;
