import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="flex gap-6 text-2xl">

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

    </div>
  );
}

export default SocialIcons;