function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-700 text-white shadow-md z-50">

      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <h1 className="text-xl font-bold text-cyan-400">
          Kalpana
        </h1>

        {/* Menu */}
        <div className="flex gap-6 text-sm md:text-base">

          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>


          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar