import React from "react";

function Page() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-heading mb-6">
        Inscription
      </h1>
      <p className="text-center mb-8 text-paragraph">
        Remplissez le formulaire ci-dessous pour vous inscrire.
      </p>
      <form className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
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
            placeholder="Entrez votre email"
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
            placeholder="Entrez votre numéro"
            className="w-full h-12 px-4 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main-500"
          />
        </div>
        <button
          type="submit"
          className="w-full h-12 bg-main text-white font-semibold rounded"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Page;
