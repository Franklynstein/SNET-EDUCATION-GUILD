import { useState } from "react";
import "../main.css";
import "./Header.css";
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <section className="main-section-header">
      <header className="page-header">
        <nav>SNET education guild</nav>
        <div id="hamburger">
          <Hamburger
            onToggle={toggleMenu}
            toggled={isOpen}
            toggle={setOpen}
            color="rgb(247, 245, 248)"
          />
        </div>
        <div className={`dropdown-menu ${isOpen ? "open" : "closed"}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Project</a>
            </li>
            <li>
              <a href="/">Ecosystem</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
          </ul>
        </div>
        <div id="dropdown">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Project</a>
            </li>
            <li>
              <a href="/">Ecosystem</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
}

export default Header;
