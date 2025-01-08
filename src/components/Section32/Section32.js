import "../main.css";
import "./Section32.css";
import width200_4 from "../assets/img/width-200_4.png";
import tImage from "../assets/img/t.jpg";
import width200 from "../assets/img/width-200.png";
import width200_2 from "../assets/img/width-200_2.png";
import width200_3 from "../assets/img/width-200_3.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section32() {
  return (
    <section id="32" className="main-section main-section-flex">
      <div className="items-32">
        <h2>SingularityNET</h2>
        <div className="item-32-container">
          <div className="item-32-right">
            <div className="item-32-right-child-1 item-32-radius">
              <div className="item-32-group">
                <div className="item-32-group-image">
                  <img src={width200_4} alt="SingularityNET" />
                </div>
                <div className="item-32-group-content">
                  <p>What is SingularityNET?</p>
                  <p className="read-more">
                    <a href="/what-is-singularityNET">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-32-right-child-2 item-32-radius">
              <div className="item-32-group">
                <div className="item-32-group-image">
                  <img src={tImage} alt="How it operates" />
                </div>
                <div className="item-32-group-content">
                  <p>
                    HOW does it <br />
                    operate?
                  </p>
                  <p className="read-more">
                    <a href="/how-does-singularityNET">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-32-left">
            <div className="item-32-left-child-1 item-32-radius">
              <div className="item-32-group">
                <div className="item-32-group-image">
                  <img src={width200} alt="Who is discovered" />
                </div>
                <div className="item-32-group-content">
                  <p>Who is Discovered?</p>
                  <p className="read-more">
                    <a href="/who-discovered-singularityNET">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-32-left-child-2 item-32-radius">
              <div className="item-32-group">
                <div className="item-32-group-image">
                  <img
                    src={width200_2}
                    alt="When was SingularityNET announced"
                  />
                </div>
                <div className="item-32-group-content">
                  <p>
                    When SingularityNET <br />
                    Announced?
                  </p>
                  <p className="read-more">
                    <a href="/what-is-singularityNET">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-32-center item-32-radius">
          <div className="item-32-group">
            <div className="item-32-group-image">
              <img src={width200_3} alt="Tokenomics" />
            </div>
            <div className="item-32-group-content">
              <p>Tokenomics</p>
              <p className="read-more">
                <a href="/singularityNET-tokenomics">Read more {">"}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/singularityDAO">SINGULARITYDAO</a>
        </p>
      </div>
    </section>
  );
}

export default Section32;
