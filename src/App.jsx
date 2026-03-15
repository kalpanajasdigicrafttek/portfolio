import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import Skills from "./sections/Skills"
import Certificates from "./sections/Certificates"


function App() {
  return (
    <div className="scroll-smooth">

      <Navbar />

      <Home />

      <About />

      <Skills />

      <Certificates />

      <Contact />

      <Footer />

    </div>
  )
}

export default App