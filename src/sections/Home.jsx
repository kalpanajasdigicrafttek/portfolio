import SocialIcons from "../components/SocialIcons";
import { Typewriter } from "react-simple-typewriter";
import SplitText from "../components/SplitText";


function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white flex items-center pt-24"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="w-full text-center md:text-left">

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm
            <SplitText
              text=" Kalpana"
              className="text-cyan-400"
              delay={80}
            />
          </h1>

      <p className="text-lg md:text-2xl text-slate-300 mb-6">
      <span className="font-semibold">
        <Typewriter
           words={[
          "I'm a Web Developer",
          "React & TailwindCSS Enthusiast",
        ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </p>

          <div className="flex justify-center md:justify-start mt-4 mb-8">
            <SocialIcons />
          </div>

          <div className="flex gap-4">

<a
  href="#contact"
  className="bg-white text-black  px-6 py-3 rounded-full
  hover:bg-slate-200 transition duration-300 hover:scale-105"
>
  Get in Touch
</a>
<a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-cyan-500 text-white px-6 py-3 rounded-full
  hover:bg-cyan-400 transition duration-300 hover:scale-105"
>
  View My Resume
</a>



</div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/profile.jpeg"
            alt="profile"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 object-cover object-top rounded-full border-4 border-cyan-400"
          />
        </div>

      </div>
      
    </section>
  );
}

export default Home;