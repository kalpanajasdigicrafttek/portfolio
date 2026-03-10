import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Project from "./sections/Project"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import Skills from "./sections/Skills"

function App() {
  return (
    <div className="scroll-smooth">

      <Navbar />

      <Home />

      <About />

      <Skills />

      <Project />

      <Contact />

      <Footer />

    </div>
  )
}

export default App