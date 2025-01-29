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
        <nav className="">SNET education guild</nav>
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
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/">
              <li>Project</li>
            </a>
            <a href="/">
              <li>Ecosystem</li>
            </a>
            <a href="/programs-discord">
              <li>Ambassador Program</li>
            </a>
          </ul>
        </div>
        <div id="dropdown">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            
            <li>
              <a href="/">Projects</a>
            </li>

            <li className="projects-menu">
              <a href="/">Ecosystem</a>
              <div className="projects-dropdown">
                <ul>
                  <a href="/rejuve-ai">
                    <li>Rejuve AI</li>
                  </a>
                  <a href="/rejuve-bio">
                    <li>Rejuve Bio</li>
                  </a>
                  <a href="/nunet">
                    <li>Nunet</li>
                  </a>
                </ul>
                <ul>
                  <a href="/jam-galaxy">
                    <li>Jam Galaxy</li>
                  </a>
                  <a href="/hyperon">
                    <li>Opencog Hyperon</li>
                  </a>
                  <a href="/cogito">
                    <li>Cogito</li>
                  </a>
                </ul>
                <ul>
                  <a href="/sophia-verse">
                    <li>Sophia Verse</li>
                  </a>
                  <a href="/zarqa">
                    <li>Zarqa</li>
                  </a>
                  <a href="/singularityDAO">
                    <li>SingularityDAO</li>
                  </a>
                </ul>
                <ul>
                  <a href="/singularityNET">
                    <li>SingularityNET</li>
                  </a>
                  <a href="/mindplex">
                    <li>Mindplex</li>
                  </a>
                  <a href="/ambassadors">
                    <li>Ambassadors</li>
                  </a>
                </ul>
                <ul>
                  <a href="/trueagi">
                    <li>TrueAGI</li>
                  </a>
                  <a href="/twin-protocol">
                    <li>Twin Protocol</li>
                  </a>
                  <a href="/hypercycle">
                    <li>HyperCycle</li>
                  </a>
                </ul>
                <ul id="ul-3">
                  <a href="/awakening-health">
                    <li>Awakening Health</li>
                  </a>
                </ul>
              </div>
            </li>
            <li>
              <a href="/programs-discord">Ambassador Program</a>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
}

export default Header;
