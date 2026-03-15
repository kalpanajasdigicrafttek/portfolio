function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center underline underline-offset-8 decoration-cyan-400">
            About Me
        </h2>
       
        {/* Timeline */}
        <div className="border-l-2 border-cyan-400 pl-6 space-y-10 mt-8">

          <div>
            <h3 className="text-xl font-semibold text-cyan-400">
              🎓 Student
            </h3>
            <p className="text-slate-400">
              Bachelor of Computer Application student passionate about web development.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400">
              💻 Frontend Developer
            </h3>
            <p className="text-slate-400">
              Currently learning React, TailwindCSS and modern UI development.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400">
              🚀 Goal
            </h3>
            <p className="text-slate-400">
              My goal is to become a professional Full Stack Developer and
              build real-world applications.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About