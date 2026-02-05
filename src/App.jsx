import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Team from "./components/Team"
import Footer from "./components/Footer"
import ThemeButton from "./components/ThemeButton"

function App() {
  useEffect(() => {
    // Initialize theme from localStorage on app load
    const savedTheme = localStorage.getItem("theme") || "light-theme"
    document.documentElement.className = savedTheme
  }, [])

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
