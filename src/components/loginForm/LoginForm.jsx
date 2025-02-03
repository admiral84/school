"use client";
import { login } from "@/lib/action";
import React from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  return (
    <div>
      <form
        className="max-w-md mx-auto bg-white p-6 shadow-md rounded"
        action={formAction}
      >
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
            placeholder="Enter your email"
            name="email"
            className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
            required
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
            name="motdepasse"
            placeholder="Enter your password"
            className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
            required
          />
        </div>
        <p className="text-red-500"></p>
        <Link href="/auth/forgot-password">
          <span className="text-blue-500 font-medium flex justify-self-end">
            mot de passe oublié
          </span>
        </Link>
        <button
          type="submit"
          className="w-full h-12 bg-main text-white font-semibold my-4 rounded"
        >
          Login
        </button>

        {state?.error}
        <Link href="/auth/register">
          {"je n'ai pas de compte"}
          register
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
