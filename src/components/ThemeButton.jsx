import { useState, useEffect } from "react"

function ThemeButton() {
  const [theme, setTheme] = useState("light-theme")

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light-theme"
    setTheme(savedTheme)
    document.documentElement.className = savedTheme
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme"
    setTheme(newTheme)
    document.documentElement.className = newTheme
    localStorage.setItem("theme", newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-button"
      aria-label="Toggle theme"
      title={theme === "light-theme" ? "Dark mode" : "Light mode"}
    >
      {theme === "light-theme" ? "🌙" : "☀️"}
    </button>
  )
}

export default ThemeButton
