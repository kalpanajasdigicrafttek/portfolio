import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", logo: "/images/html.png", level: "Intermediate" },
    { name: "CSS", logo: "/images/css.png", level: "Intermediate" },
    { name: "JavaScript", logo: "/images/javascript.png", level: "Intermediate" },
    { name: "React", logo: "/images/react.png", level: "Basics → Intermediate" },
    { name: "TailwindCSS", logo: "/images/tailwindcss.png", level: "Intermediate" },
    { name: "SQL", logo: "/images/sql.png", level: "Basics" }
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to determine slide direction based on mobile/desktop and card index
  const getSlideX = (index) => {
    if (!isMobile) {
      // Desktop: cards 0,1,2 left; 3,4,5 right
      return index < 3 ? -100 : 100;
    } else {
      // Mobile: 0,1 left; 2,3 right; 4,5 left
      if ([0, 1, 4, 5].includes(index)) return -100;
      return 100;
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20" id="skills">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ x: getSlideX(index), opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }} // animate every time in view
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center shadow-lg cursor-pointer hover:shadow-gray-300 transition-all duration-500"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-white text-xl font-semibold mb-1">{skill.name}</h3>
              <p className="text-gray-300">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}