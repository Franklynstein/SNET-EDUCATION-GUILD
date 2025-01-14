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
            <li className="projects-menu">
              <a href="/">Projects</a>
              <div className="projects-dropdown">
                <ul>
                  <li>
                    <a href="/rejuve-ai">Rejuve AI</a>
                  </li>
                  <li>
                    <a href="/rejuve-bio">Rejuve Bio</a>
                  </li>
                  <li>
                    <a href="/nunet">Nunet</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/jam-galaxy">Jam Galaxy</a>
                  </li>
                  <li>
                    <a href="/hyperon">Opencog Hyperon</a>
                  </li>
                  <li>
                    <a href="/cogito">Cogito</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/sophia-verse">Sophia Verse</a>
                  </li>
                  <li>
                    <a href="/zarqa">Zarqa</a>
                  </li>
                  <li>
                    <a href="/singularityDAO">SingularityDAO</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/singularityNET">SingularityNET</a>
                  </li>
                  <li>
                    <a href="/mindplex">Mindplex</a>
                  </li>
                  <li>
                    <a href="/ambassadors">Ambassadors</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/trueagi">TrueAGI</a>
                  </li>
                  <li>
                    <a href="/twin-protocol">Twin Protocol</a>
                  </li>
                  <li>
                    <a href="/hypercycle">HyperCycle</a>
                  </li>
                </ul>
                <ul id="ul-3">
                  <li>
                    <a href="/awakening-health">Awakening Health</a>
                  </li>
                </ul>
              </div>
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
