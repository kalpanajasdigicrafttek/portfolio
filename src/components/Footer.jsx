import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-6 text-center">

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-2xl mb-3">

        <a
          href="https://github.com/kalpanajasdigicrafttek"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/kalpanagangadharan/"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:kalpanagangadharan1214@gmail.com"
          className="hover:text-cyan-400 transition"
        >
          <FaEnvelope />
        </a>

        <a href="https://wa.me/917200273924" target="_blank" className="hover:text-green-400 transition">
          <FaWhatsapp />
        </a>

      </div>

      {/* Copyright */}
      <p className="text-slate-400 text-sm">
        © {new Date().getFullYear()} Kalpana
      </p>

    </footer>
  )
}

export default Footer