import React from "react";
import { motion } from "framer-motion";

export default function Certificates() {

  const certificates = [
    {
      title: "Python Programming",
      description:
        "Learned the basic concepts of Python programming including variables, loops, and functions.",
      image: "/cert-images/python.png",
      pdf: "/certificates/python.pdf"
    },
    {
      title: "SQL Database",
      description:
        "Learned SQL queries, joins, database design, and database management.",
      image: "/cert-images/sql.png",
      pdf: "/certificates/sql.pdf"
    },
    {
      title: "Zoho Certification",
      description:
        "Learned Zoho Creator workflows and used Deluge scripting for application automation.",
      image: "/cert-images/zoho.jpeg",
      pdf: "/certificates/zoho.pdf"
    },
    {
      title: "UI/UX Certification",
      description:
        "Learned basic UI/UX design principles for creating simple and user-friendly interfaces.",
      image: "/cert-images/ui-ux.jpeg",
      pdf: "/certificates/ui-ux.pdf"
    }
  ];

  return (
    <section id="certificates" className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 px-6">

      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certificates
      </motion.h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-10">

        {certificates.map((cert, index) => (

          <motion.div
            key={index}
            className="bg-slate-800 rounded-xl overgridflow-hidden shadow-lg hover:scale-105 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >

            {/* Certificate Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-44 object-cover object-top"
            />

            {/* Text */}
            <div className="p-6">

              <h3 className="text-xl font-semibold text-white mb-2">
                {cert.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {cert.description}
              </p>

              {/* Button */}
              <div className="flex justify-center">
                <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-500 px-4 py-2 rounded-lg text-white hover:bg-cyan-600 transition"
              >
                View Certificate
              </a>
              </div>
              

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}