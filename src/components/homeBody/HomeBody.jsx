import Image from "next/image";
import React from "react";

function HomeBody() {
  return (
    <div className="py-20 px-2 flex justify-between bg-gray-200">
      <div className="mr-9 w-5/6">
        <span className="text-black font-bold text-3xl text-wrap my-10">
          Evitez les obstacles et commencez a apprendre de n'import ou
        </span>
        <p className="text-black text-wrap">
          <span className="font-bold"> 🎓 Apprenez, Progressez, Réalisez </span>
          – Découvrez une nouvelle façon d'apprendre l'informatique, où que vous
          soyez ! En tant que professeur d'informatique passionné, je suis là
          pour vous guider à travers les concepts essentiels, des bases de la
          programmation à l'architecture des systèmes complexes.
          <br />{" "}
          <span className="font-bold">
            💡 Un contenu interactif et adapté
          </span>{" "}
          : Grâce à des cours dynamiques, des exercices pratiques et des
          ressources innovantes, chaque module est conçu pour vous aider à
          maîtriser les compétences techniques dont vous avez besoin pour
          réussir dans le monde numérique d'aujourd'hui.
        </p>
      </div>
      <div className="h-[400px] w-[1000px] relative hidden lg:block">
        <Image
          src="https://images.pexels.com/photos/4143800/pexels-photo-4143800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default HomeBody;
