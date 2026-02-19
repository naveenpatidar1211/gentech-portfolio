import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import ProjectDetail from "./components/ProjectDetail"
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
    <Router>
      <ThemeButton />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Team />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
