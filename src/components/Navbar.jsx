import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>GenTech AI</h2>
          </div>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link" onClick={closeMenu}>Team</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
            </li>
          </ul>

          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;