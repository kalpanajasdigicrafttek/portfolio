import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function PillNav({ items }) {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      items.forEach((item, index) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-slate-900 border border-slate-700 px-6 py-3 flex justify-between items-center shadow-lg">

        {/* Logo */}
        <h1 className="text-cyan-400 font-bold text-xl">
          Kalpana
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setActive(index)}
              className={`px-4 py-1 rounded-full transition-all duration-300 ${
                active === index
                  ? "bg-white text-slate-900"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-slate-900 flex flex-col items-center gap-6 py-6">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => {
                setActive(index);
                setMenuOpen(false);
              }}
              className="text-white hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default PillNav;