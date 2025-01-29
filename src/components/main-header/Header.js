import { useState } from "react";
import "../main.css";
import "./Header.css";
import Hamburger from "hamburger-react";
import logo from "../assets/img/logo-new-1.png"

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isEcosystemOpen, setEcosystemOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
    setEcosystemOpen(false);
  };

  const toggleEcosystem = () => {
    setEcosystemOpen(!isEcosystemOpen);
    console.log('yex')
    console.log(isEcosystemOpen)
  };

  return (
    <section className="main-section-header">
      <header className="page-header">
      
      
      <div className="logo-container"> 
      <img src={logo} alt="SNET Education Guild Logo" /> 
        </div>
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
            <li className="ecosystem-link" onClick={toggleEcosystem}> 
              <a>Ecosystem</a>
              <div className={`ecosystem-dropdown ${isEcosystemOpen ? "open" : "hide"}`}> 
                <ul>
                  <li><a href="/rejuve-ai">Rejuve AI</a></li>
                  <li><a href="/rejuve-bio">Rejuve Bio</a></li>
                  <li><a href="/nunet">Nunet</a></li>
                  <li><a href="/jam-galaxy">Jam Galaxy</a></li>
                  <li><a href="/hyperon">Opencog Hyperon</a></li>
                  <li><a href="/cogito">Cogito</a></li>
                  <li><a href="/sophia-verse">Sophia Verse</a></li>
                  <li><a href="/zarqa">Zarqa</a></li>
                  <li><a href="/singularityDAO">SingularityDAO</a></li>
                  <li><a href="/singularityNET">SingularityNET</a></li>
                  <li><a href="/mindplex">Mindplex</a></li>
                  <li><a href="/ambassadors">Ambassadors</a></li>
                  <li><a href="/trueagi">TrueAGI</a></li>
                  <li><a href="/twin-protocol">Twin Protocol</a></li>
                  <li><a href="/hypercycle">HyperCycle</a></li>
                  <li><a href="/awakening-health">Awakening Health</a></li>
                </ul>
              </div>
            </li>
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
