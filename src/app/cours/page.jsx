import Image from "next/image";
import React from "react";

function Cours() {
  const doman = [
    {
      id: 1,
      titre: "Algorithmique et programmation",
      url: "https://img.freepik.com/premium-photo/top-view-woman-sitting-floor-using-laptop-with-illustration-business-process-workflow-automation-with-flowchart_20693-1221.jpg?w=740",
    },
    {
      id: 2,
      titre: "HTML",
      url: "https://img.freepik.com/premium-photo/html-system-website-concept_23-2150376734.jpg?w=740",
    },
    {
      id: 3,
      titre: "CSS",
      url: "https://img.freepik.com/free-vector/front-end-concept-illustration_114360-22213.jpg?t=st=1735599916~exp=1735603516~hmac=1edcf7bc5adba7e459cce5b47d6b0fb1e19ed95bac04f95b45b2b550092bef8c&w=360",
    },
    {
      id: 4,
      titre: "Base de Données",
      url: "https://img.freepik.com/free-vector/network-database-concept_1284-4084.jpg?t=st=1735600027~exp=1735603627~hmac=1f3b4c3f3097b06f33ce86b0b8eec44ad2d9c987780317c547d53f3e5107bbb1&w=360",
    },
  ];

  return (
    <div className="p-8">
      {/* Intro Section */}
      <div className="py-14 flex flex-col md:flex-row gap-14">
        <div>
          <Image
            src="https://img.freepik.com/free-photo/students-spending-free-time-class_1098-1282.jpg?t=st=1735596843~exp=1735600443~hmac=f923e7f58f83bdfe564440222c17415f55066737b680b801bb39c3b990eb6b4b&w=740"
            height={500}
            width={500}
            alt="Discover Courses"
            className="rounded-lg"
          />
        </div>
        <div className="leading-10">
          <h2 className="text-2xl font-bold text-heading mb-4">
            Découvrez Nos Cours Gratuits
          </h2>
          <p className="text-paragraph">
            Nous avons conçu cette plateforme pour vous offrir un accès simple
            et gratuit à une variété de cours destinés à enrichir vos
            connaissances et développer vos compétences.
          </p>
          <h3 className="font-bold mt-4">Pourquoi Choisir Nos Cours ?</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <span className="font-bold">100% Gratuits</span> : Tous nos cours
              sont entièrement gratuits, spécialement conçus pour nos élèves.
            </li>
            <li>
              <span className="font-bold">Accessibles à Tous</span> : Que vous
              soyez débutant ou déjà avancé, nos cours sont adaptés à différents
              niveaux.
            </li>
            <li>
              <span className="font-bold">Richesse des Contenus</span> :
              Profitez de cours interactifs, d'exercices pratiques, et de
              ressources téléchargeables.
            </li>
          </ul>
        </div>
      </div>

      {/* Domains Section */}
      <div>
        <h2 className="text-heading font-bold text-center text-2xl my-8">
          Nos Domaines d’Apprentissage
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doman.map((item) => (
            <li
              key={item.id}
              className="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={item.url}
                height={300}
                width={300}
                alt={item.titre}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-center font-bold text-lg">{item.titre}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cours;
