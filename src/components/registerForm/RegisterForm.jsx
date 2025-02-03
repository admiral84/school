"use client";
import { register } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/auth/login");
  }, [state?.success, router]);

  return (
    <form
      action={formAction}
      className="max-w-md mx-auto bg-white p-6 shadow-md rounded"
    >
      <div className="mb-4">
        <label
          htmlFor="nom"
          className="block text-sm font-semibold text-gray-600"
        >
          Nom
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder="Entrez votre nom"
          className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="prenom"
          className="block text-sm font-semibold text-gray-600"
        >
          Prénom
        </label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          placeholder="Entrez votre prénom"
          className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
        />
      </div>
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
          name="email"
          placeholder="Entrez votre email"
          className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="motdepasse"
          className="block text-sm font-semibold text-gray-600"
        >
          Mot de passe
        </label>
        <input
          type="password"
          id="motdepasse"
          name="motdepasse"
          placeholder="Entrez votre mot de passe"
          className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="retapermotdepasse"
          className="block text-sm font-semibold text-gray-600"
        >
          Retaper mot de passe
        </label>
        <input
          type="password"
          id="retapermotdepasse"
          name="retapermotdepasse"
          placeholder="Retapez votre mot de passe"
          className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="classe"
          className="block text-sm font-semibold text-gray-600"
        >
          Classe
        </label>
        <select
          id="classe"
          name="classe"
          className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
        >
          <option value="2eme science1">2eme science1</option>
          <option value="2eme science2">2eme science2</option>
          <option value="3eme lettre1">3eme lettre1</option>
          <option value="3eme lettre2">3eme lettre2</option>
          <option value="3eme eco3">3eme eco3</option>
          <option value="3eme eco4">3eme eco4</option>
          <option value="4eme Tech3">4eme Tech3</option>
          <option value="4eme Tech4">4eme Tech4</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="numero"
          className="block text-sm font-semibold text-gray-600"
        >
          Numéro
        </label>
        <input
          type="number"
          id="numero"
          name="numero"
          placeholder="Entrez votre numéro"
          min="1"
          max="50"
          className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
        />
      </div>
      <button
        type="submit"
        className="w-full h-12 bg-main text-white font-semibold rounded"
      >
        S'inscrire
      </button>
      {state?.error}
      <Link href="/auth/login">
        j'ai un compte <b>login</b>
      </Link>
    </form>
  );
}

export default RegisterForm;
