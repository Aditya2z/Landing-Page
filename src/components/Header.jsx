import { useState } from "react";
import { BsHouse, BsPerson, BsArrowUpRight, BsList, BsX } from "react-icons/bs";
import "../styles/header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("buyers");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (key) => {
    setActiveLink(key);
    setMenuOpen(false); // close menu on link click
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">
          <BsHouse />
          <span>RealtorX</span>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <BsX /> : <BsList />}
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a
              href="#"
              className={`nav-link ${activeLink === "buyers" ? "active" : ""}`}
              onClick={() => handleNavClick("buyers")}
            >
              For buyers
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link ${activeLink === "tenants" ? "active" : ""}`}
              onClick={() => handleNavClick("tenants")}
            >
              For tenants
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link ${activeLink === "owners" ? "active" : ""}`}
              onClick={() => handleNavClick("owners")}
            >
              For owners
            </a>
          </li>
          <li>
            <a
              href="#cta"
              className={`nav-link ${activeLink === "dealers" ? "active" : ""}`}
              onClick={() => handleNavClick("dealers")}
            >
              For dealers/builders
            </a>
          </li>
          <li>
            <a
              href="#cta"
              className={`nav-link ${activeLink === "insights" ? "active" : ""}`}
              onClick={() => handleNavClick("insights")}
            >
              Insights
            </a>
          </li>

          <ul className="btn-pannel mobile">
          <button className="login-btn">
            <BsPerson />
            <span>Login</span>
          </button>
          <button className="post-btn">
            <span>Post a property</span>
            <BsArrowUpRight />
          </button>
        </ul>
        </ul>

        <ul className="btn-pannel desktop">
          <button className="login-btn">
            <BsPerson />
            <span>Login</span>
          </button>
          <button className="post-btn">
            <span>Post a property</span>
            <BsArrowUpRight />
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
