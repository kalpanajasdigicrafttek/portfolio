// src/sections/Skills.jsx

import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwindcss.png"; // add other logos similarly

export default function Skills() {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "TailwindCSS", logo: tailwindLogo },
    // add more skills here
  ];

  return (
 <section className="py-16 bg-slate-950" id="skills">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-white">My Skills</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-md"
        >
          <div className="w-28 h-28 flex items-center justify-center bg-gray-700 border border-gray-600">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-20 h-20 object-contain"
            />
          </div>
          <p className="mt-4 text-lg font-medium text-white">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}