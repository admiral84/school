import React from "react";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

function Footer() {
  const foot = [
    {
      id: 1,
      title: "Contact",
      details: [
        { icon: <FiPhone />, line: "+21693821429" },
        { icon: <FiMail />, line: "nasreddinej@gmail.com" },
        { icon: <FiMapPin />, line: "Fernana 8140 Jendouba" },
      ],
    },
  ];
  const cour = [
    {
      id: 1,
      title: "Cours",
      details: ["JavaScript", "HTML", "CSS", "Python"],
    },
  ];
  const blog = [
    {
      id: 1,
      title: "Blog and News",
      details: [
        "Impact de l'IA",
        "Les algorithmes avancés",
        "Les dernières recherches de l'IA",
        "ChatGPT",
      ],
    },
  ];
  const socialLinks = [
    { id: 1, icon: <FiGlobe />, url: "https://www.stoman.me/" },
    { id: 2, icon: <FiGithub />, url: "https://github.com/" },
    { id: 3, icon: <FiTwitter />, url: "https://twitter.com/" },
    { id: 4, icon: <FiLinkedin />, url: "https://www.linkedin.com/in/" },
    { id: 5, icon: <FiYoutube />, url: "https://www.youtube.com/c/" },
  ];

  return (
    <div className="bg-gray-200 px-4 md:px-12 py-8">
      {/* Subscribe Section */}
      <div className="flex flex-wrap items-center justify-center gap-4 bg-white p-6 mb-8 rounded-lg shadow-sm">
        <input
          type="text"
          placeholder="Enter your full name"
          className="h-12 w-full sm:w-1/2 md:w-1/4 border-none border-b-2 border-red-500 px-4 placeholder-gray-400 focus:outline-none focus:border-b-4 focus:border-red-700"
        />
        <input
          type="text"
          placeholder="Enter your email"
          className="h-12 w-full sm:w-1/2 md:w-1/4 border-none border-b-2 border-red-500 px-4 placeholder-gray-400 focus:outline-none focus:border-b-4 focus:border-red-700"
        />
        <button className="bg-main text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700">
          Subscribe
        </button>
      </div>

      {/* Contact, Courses, Blog Sections */}
      <div className="flex flex-wrap justify-between gap-8">
        {/* Contact Section */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          {foot.map((prop) => (
            <div key={prop.id}>
              <h1 className="text-xl font-bold text-heading mb-4">
                {prop.title}
              </h1>
              {prop.details.map((detail, index) => (
                <span
                  key={index}
                  className="flex items-center text-paragraph gap-2 mb-2"
                >
                  {detail.icon} <span>{detail.line}</span>
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          {cour.map((x) => (
            <div key={x.id}>
              <h1 className="text-xl font-bold text-heading mb-4">{x.title}</h1>
              <ul>
                {x.details.map((v, index) => (
                  <li className="text-paragraph mb-2" key={index}>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Blog Section */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          {blog.map((z) => (
            <div key={z.id}>
              <h1 className="text-xl font-bold text-heading mb-4">{z.title}</h1>
              <ul>
                {z.details.map((z, index) => (
                  <li className="text-paragraph mb-2" key={index}>
                    {z}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
        <h1 className="text-3xl font-bold text-heading">GENIUS.</h1>
        <span className="text-lg text-heading">Copyright by Genius 2024</span>
        <ul className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${link.url}`}
              className="rounded-full border-secondary bg-gray-300 hover:bg-main border-solid border-2 p-2 text-xl"
            >
              {link.icon}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
