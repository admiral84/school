import React from "react";

function Contact() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-heading mb-6">
        Contact Us
      </h1>
      <p className="text-center mb-8 text-paragraph">
        Have any questions or feedback? Fill out the form below, and we'll get
        back to you as soon as possible.
      </p>
      <form className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-600"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Enter your message"
            className="w-full px-4 py-2 border border-main rounded focus:outline-none focus:ring-2 "
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full h-12 bg-main text-white font-semibold rounded  "
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
