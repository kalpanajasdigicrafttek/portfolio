import React from "react";

import ecommerceImg from "../assets/ecommerce.png";
import scholarshipImg from "../assets/scholarship.png";
import clothImg from "../assets/cloth.jpeg";

function Project() {

  const projects = [
    {
      name: "E-Commerce Website",
      description: "Online shopping website with product listing and cart.",
      logo: ecommerceImg,
    },
    {
      name: "Scholarship Finder",
      description: "Platform to find and apply for scholarships easily.",
      logo: scholarshipImg,
    },
    {
      name: "Clothing Store",
      description: "Modern clothing store website UI design.",
      logo: clothImg,
    },
  ];

  return (
        <section id="projects" className="py-16 bg-slate-900">

    <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-3xl font-bold text-center mb-12 text-white">
    My Projects
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-gray-800 border border-gray-700 shadow-sm rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-md"
            >

              <img
                src={project.logo}
                alt={project.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">

                <h3 className="text-xl font-bold text-white">
                  {project.name}
                </h3>

                <p className="text-gray-300 mt-2">
                  {project.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Project;