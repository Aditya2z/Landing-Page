import { useState } from "react";
import { BsHouse, BsPerson, BsArrowUpRight } from "react-icons/bs";
import "../styles/header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("buyers");

  const handleNavClick = (key) => {
    setActiveLink(key);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">
          <BsHouse />
          <span>RealtorX</span>
        </div>
        <ul className="nav-links">
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
        </ul>
        <ul className="btn-pannel">
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
