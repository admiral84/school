import Image from "next/image";
import React from "react";

function about() {
  return (
    <div className="h-screen p-8">
      <div className="flex justify-between">
        <div className="h-96 w-1/3 border-r-4">
          <Image
            src="https://images.pexels.com/photos/7776419/pexels-photo-7776419.jpeg"
            width={500} // Adjust to your desired aspect ratio
            height={500} // Adjust to your desired aspect ratio
            className="object-cover h-full w-full"
            alt="Image de groupe d'élèves"
          />
        </div>
        <div className="w-1/2 py-24">
          <h1 className="text-heading  font-bold text-xl my-4">About Us</h1>
          <hr />
          <p className="text-paragraph text-wrap leading-relaxed text-lg my-4">
            Bienvenue sur GENIUS! Notre mission est de rendre l'apprentissage
            accessible à tous, avec des cours gratuits et des quiz interactifs
            pour consolider vos connaissances. Pour le moment, je suis le seul
            tuteur, dédié à créer des contenus éducatifs de qualité dans divers
            domaines. Que vous soyez débutant ou en quête d'approfondissement,
            cette plateforme est là pour vous aider à apprendre à votre rythme,
            sans frais. Rejoignez-nous pour explorer, apprendre, et réussir !
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;
