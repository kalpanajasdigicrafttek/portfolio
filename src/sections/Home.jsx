import profile from "../assets/profile.jpeg"
import SocialIcons from "../components/SocialIcons";

function Home() {
  return (
    <section id="home" className="min-h-screen bg-slate-950 text-white flex items-center pt-24">

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        <div className="text-center md:text-left">

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">Kalpana</span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg mb-6">
            I'm a Frontend Developer specializing in building modern
            web applications using React and TailwindCSS.
          </p>

          <div className="flex justify-center md:justify-start">
            <SocialIcons />
          </div>

          <a
            href="#projects"
            className="mt-6 inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            View My Work
          </a>

        </div>

        <div className="flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 object-cover object-top rounded-full border-4 border-cyan-400"
          />
        </div>

      </div>

    </section>
  )
}

export default Home