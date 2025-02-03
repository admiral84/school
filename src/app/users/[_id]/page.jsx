import React from "react";
import { getUser } from "@/lib/data";

async function Page({ params }) {
  const { _id } = params;
  const user = await getUser(_id);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Détails de l'Utilisateur
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold">Nom</h2>
            <p className="text-gray-700">{user.nom}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Prénom</h2>
            <p className="text-gray-700">{user.prenom}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-700">{user.email}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Classe</h2>
            <p className="text-gray-700">
              {user.classe || <span className="text-gray-400">N/A</span>}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Numéro</h2>
            <p className="text-gray-700">
              {user.numero !== null ? (
                user.numero
              ) : (
                <span className="text-gray-400">N/A</span>
              )}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Admin</h2>
            <p
              className={`text-lg font-bold ${
                user.isAdmin ? "text-green-600" : "text-gray-500"
              }`}
            >
              {user.isAdmin ? "Oui" : "Non"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
