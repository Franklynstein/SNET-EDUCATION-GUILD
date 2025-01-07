import "../main.css";
import "./Section38.css";
import width2004 from "../assets/img/width-200_4.jpg";
import tImage from "../assets/img/t.jpg";
import width200 from "../assets/img/width-200.png";
import width2002 from "../assets/img/width-200_2.png";
import width2003 from "../assets/img/width-200_3.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section38() {
  return (
    <section id="38" className="main-section main-section-flex">
      <div className="items-38">
        <h2>Mindplex</h2>
        <div className="item-38-container">
          <div className="item-38-right">
            <div className="item-38-right-child-1 item-38-radius">
              <div className="item-38-group">
                <div className="item-38-group-image">
                  <img src={width2004} alt="Mindplex" />
                </div>
                <div className="item-38-group-content">
                  <p>What is Mindplex?</p>
                  <p className="read-more">
                    <a href="/what-is-mindplex">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-38-right-child-2 item-38-radius">
              <div className="item-38-group">
                <div className="item-38-group-image">
                  <img src={tImage} alt="How it operates" />
                </div>
                <div className="item-38-group-content">
                  <p>
                    HOW does it <br />
                    operate?
                  </p>
                  <p className="read-more">
                    <a href="/how-does-mindplex">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-38-left">
            <div className="item-38-left-child-1 item-38-radius">
              <div className="item-38-group">
                <div className="item-38-group-image">
                  <img src={width200} alt="Who is Discovered" />
                </div>
                <div className="item-38-group-content">
                  <p>Who is Discovered?</p>
                  <p className="read-more">
                    <a href="/who-discovered-mindplex">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-38-left-child-2 item-38-radius">
              <div className="item-38-group">
                <div className="item-38-group-image">
                  <img src={width2002} alt="When Mindplex Announced" />
                </div>
                <div className="item-38-group-content">
                  <p>
                    When Mindplex <br />
                    Announced?
                  </p>
                  <p className="read-more">
                    <a href="/what-is-mindplex">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-38-center item-38-radius">
          <div className="item-38-group">
            <div className="item-38-group-image">
              <img src={width2003} alt="Tokenomics" />
            </div>
            <div className="item-38-group-content">
              <p>Tokenomics</p>
              <p className="read-more">
                <a href="/mindplex-tokenomics">Read more {">"}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/singularityNET">SINGULARITYNET</a>
        </p>
      </div>
    </section>
  );
}

export default Section38;
