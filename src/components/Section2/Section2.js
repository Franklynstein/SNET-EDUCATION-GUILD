import "../main.css";
import "./Section2.css";
import chopper from "../assets/img/chopper.gif";
import iconEight from "../assets/img/icons8-next-page-50 (1).png";
import width699 from "../assets/img/width-699.png";
import rocket from "../assets/img/rocket.gif";
import navigatorImage from "../assets/img/navigator-image.png";

function Section2() {
  return (
    <section id="2" className="main-section">
      <div className="items-2">
        <div className="item-2-top-side item-2-radius">
          <p>FEATURES</p>
        </div>
        <div className="item-2-right">
          <div className="item-2-top item-2-radius">
            <p>
              <a href="/">Home</a>
            </p>
            <div className="item-2-bottom-right-next">
              <img
                src={iconEight}
                draggable="false"
                alt="Download Outline Icon"
              />
            </div>
          </div>
          <div className="item-2-bottom-container">
            <div className="item-2-bottom-left item-2-radius">
              <p>
                Education Guild <br />
                Projects
              </p>
              <div className="section-2-image">
                <img
                  className="paNqSg"
                  src={chopper}
                  draggable="false"
                  alt="Animated Helicopter Carrying Webpage"
                />
              </div>
              <a href="/" target="_blank" rel="noopener noreferrer">
              <div className="item-2-bottom-right-next">
                <img
                  src={iconEight}
                  draggable="false"
                  alt="Download Outline Icon"
                />
              </div>
              </a>
            </div>
            <div className="item-2-bottom item-2-radius">
              <p>
                Ambassador <br />
                Program Discord
              </p>
              <div className="section-2-image">
                <img
                  className="paNqSg"
                  src={width699}
                  draggable="false"
                  alt="Animated Helicopter Carrying Webpage"
                />
              </div>
              <a href="https://discord.gg/snet" target="_blank" rel="noopener noreferrer">
              <div className="item-2-bottom-right-next">
                <img
                  src={iconEight}
                  draggable="false"
                  alt="Download Outline Icon"
                />
              </div>
              </a>
            </div>
            <div className="item-2-bottom-right item-2-radius">
              <p>
                SNET Ecosystem <br />
                and Technology
              </p>
              <div className="section-2-image">
                <img
                  className="paNqSg"
                  src={rocket}
                  draggable="false"
                  alt="Animated Helicopter Carrying Webpage"
                />
              </div>
              <a href="/rejuve-ai" target="_blank" rel="noopener noreferrer">
                    <div className="item-2-bottom-right-next">
                    <img
                  src={iconEight}
                  draggable="false"
                  alt="Download Outline Icon"
                />
                </div>
              </a>
              </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-2">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/">HOME</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-2">
        <p>
          <a href="/rejuve-ai">REJUVE AI</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section2;
