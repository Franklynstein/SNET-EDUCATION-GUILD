import "../main.css";
import "./Section53.css";
import width2006 from "../assets/img/width-200_6.png";
import tImage from "../assets/img/t.jpg";
import width200 from "../assets/img/width-200.png";
import width2002 from "../assets/img/width-200_2.png";
import width2003 from "../assets/img/width-200_3.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section53() {
  return (
    <section id="53" className="main-section main-section-flex">
      <div className="items-53">
        <h2>Twin Protocol</h2>
        <div className="item-53-container">
          <div className="item-53-right">
            <div className="item-53-right-child-1 item-53-radius">
              <div className="item-53-group">
                <div className="item-53-group-image">
                  <img src={width2006} alt="Twin Protocol" />
                </div>
                <div className="item-53-group-content">
                  <p>What is Twin Protocol?</p>
                  <p className="read-more">
                    <a href="/what-is-twin-protocol">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-53-right-child-2 item-53-radius">
              <div className="item-53-group">
                <div className="item-53-group-image">
                  <img src={tImage} alt="How it operates" />
                </div>
                <div className="item-53-group-content">
                  <p>
                    HOW does it <br />
                    operate?
                  </p>
                  <p className="read-more">
                    <a href="/how-does-twin-protocol">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-53-left">
            <div className="item-53-left-child-1 item-53-radius">
              <div className="item-53-group">
                <div className="item-53-group-image">
                  <img src={width200} alt="Who is Discovered" />
                </div>
                <div className="item-53-group-content">
                  <p>Who is Discovered?</p>
                  <p className="read-more">
                    <a href="/who-discovered-twin-protocol">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-53-left-child-2 item-53-radius">
              <div className="item-53-group">
                <div className="item-53-group-image">
                  <img src={width2002} alt="When Twin Protocol Announced" />
                </div>
                <div className="item-53-group-content">
                  <p>
                    When Twin Protocol <br />
                    Announced?
                  </p>
                  <p className="read-more">
                    <a href="/what-is-twin-protocol">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-53-center item-53-radius">
          <div className="item-53-group">
            <div className="item-53-group-image">
              <img src={width2003} alt="Tokenomics" />
            </div>
            <div className="item-53-group-content">
              <p>Tokenomics</p>
              <p className="read-more">
                <a href="/twin-protocol-tokenomics">Read more {">"}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/trueagi">TRUEAGI</a>
        </p>
      </div>
    </section>
  );
}

export default Section53;
