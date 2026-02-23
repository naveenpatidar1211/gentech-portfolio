import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Team from "./components/Team"
import Footer from "./components/Footer"
import ThemeButton from "./components/ThemeButton"
import ProjectDetail from "./pages/ProjectDetail"
import Contact from "./pages/Contact"

function App() {
  const [route, setRoute] = useState(window.location.hash || "")

  useEffect(() => {
    // Initialize theme from localStorage on app load
    const savedTheme = localStorage.getItem("theme") || "light-theme"
    document.documentElement.className = savedTheme

    const onHash = () => setRoute(window.location.hash || "")
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  // Simple hash-based routing for project details: #/project/{index}
  if (route.startsWith("#/project/")) {
    const parts = route.split("/")
    const idx = parseInt(parts[2], 10)
    return (
      <>
        <ThemeButton />
        <ProjectDetail index={idx} />
      </>
    )
  }

  // Contact page route
  if (route === "#contact") {
    return (
      <>
        <ThemeButton />
        <Navbar />
        <Contact />
        <Footer />
      </>
    )
  }

  return (
    <>
      <ThemeButton />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Team />
      <Footer />
    </>
  )
}

export default App
