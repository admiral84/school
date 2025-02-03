import React from "react";
import Link from "next/link";
import { getUsers } from "@/lib/data";

async function page() {
  const users = await getUsers();
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Liste des Utilisateurs
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-3 px-4 text-left border-b">Nom</th>
                <th className="py-3 px-4 text-left border-b">Prénom</th>
                <th className="py-3 px-4 text-left border-b">Email</th>
                <th className="py-3 px-4 text-left border-b">Classe</th>
                <th className="py-3 px-4 text-left border-b">Numéro</th>
                <th className="py-3 px-4 text-left border-b">Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">
                    <Link
                      href={`/users/${user._id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {user.nom}
                    </Link>
                  </td>
                  <td className="py-3 px-4 border-b">{user.prenom}</td>
                  <td className="py-3 px-4 border-b">{user.email}</td>
                  <td className="py-3 px-4 border-b">
                    {user.classe || <span className="text-gray-400">N/A</span>}
                  </td>
                  <td className="py-3 px-4 border-b">
                    {user.numero !== null ? (
                      user.numero
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </td>
                  <td className="py-3 px-4 border-b">
                    {user.isAdmin ? (
                      <span className="text-green-600 font-bold">Oui</span>
                    ) : (
                      <span className="text-gray-500">Non</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
