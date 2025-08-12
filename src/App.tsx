import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
// import ResumeTimeline from "./components/ResumeTimeline"
import Resume from "./components/Resume"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
