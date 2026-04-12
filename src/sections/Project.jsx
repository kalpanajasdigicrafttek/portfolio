import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "lucide-react";

const projects = [
  {
    title: "Weather App",
    image: "/project/weather.png",
    desc: "A weather app that shows real-time temperature, humidity, and wind details using API.",
    link: "https://kalpana-weather-app.netlify.app/",
  },
  {
    title: "Tic Tac Toe",
    image: "/project/tictactoe.png",
    desc: "A simple Tic-Tac-Toe game with win detection and restart functionality.",
    link: "https://kalpana-tic-tac-toe.netlify.app/",
  },
  {
    title: "Calculator",
    image: "/project/calculator.png",
    desc: "A basic calculator that performs arithmetic operations with clean UI.",
    link: "https://kalpana-calculator.netlify.app/",
  },
  {
    title: "Contact Form",
    image: "/project/contact.png",
    desc: "A contact form with validation and user-friendly design.",
    link: "https://kalpana-contact-form.netlify.app/",
  },
];

// 🔥 container stagger
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 🔥 card animation (left → position)
const cardVariants = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Projects() {
  const [flippedCards, setFlippedCards] = useState([]);

  return (
    <section id="project">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 px-5">
      
      <h1 className="text-3xl text-white font-bold text-center mb-12">
        My Projects 
      </h1>

      {/* 🔥 Scroll trigger container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // 👈 key line
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >

        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="perspective"
          >

            <div
              onClick={() => {
                if (flippedCards.includes(index)) {
                  setFlippedCards(flippedCards.filter((i) => i !== index));
                } else {
                  setFlippedCards([...flippedCards, index]);
                }
              }}
              className={`relative w-full h-64 duration-700 preserve-3d cursor-pointer ${
                flippedCards.includes(index) ? "rotate-y-180" : ""
              }`}
            >

              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-white shadow-lg flex items-center justify-center group">
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-3"
                />

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 
                                bg-black text-white text-xs px-3 py-1 rounded-md 
                                opacity-0 group-hover:opacity-100 
                                transition duration-300 pointer-events-none">
                  Click to view 👆
                </div>

              </div>

              {/* BACK */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl shadow-lg flex flex-col justify-center items-center text-center px-4 bg-blue-100">

                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  {project.title}
                </h2>

                <p className="text-sm text-gray-700 mb-4">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Live Demo 🔗
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </motion.div>
    </div>
    </section>
  );
}

export default Projects;