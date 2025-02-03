import RegisterForm from "@/components/registerForm/RegisterForm";

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
      <RegisterForm />
    </div>
  );
}

export default Page;
