import "../main.css";
import "./Section15.css";
import width800HImage from "../assets/img/width-800-h.jpg";
import width200Image from "../assets/img/width-200.png";
import width200_3Image from "../assets/img/width-200_3.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section15() {
  return (
    <section id="15" className="main-section main-section-flex">
      <div className="items-15">
        <h2>OpenCog Hyperon</h2>
        <div className="item-15-container">
          <div className="item-15-right">
            <div className="item-15-right-child-1 item-15-radius">
              <div className="item-15-group">
                <div className="item-15-group-image">
                  <img src={width800HImage} alt="OpenCog Hyperon" />
                </div>
                <div className="item-15-group-content">
                  <p>What is OpenCog Hyperon?</p>
                  <p className="read-more">
                    <a href="/what-is-hyperon">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-15-right-child-2 item-15-radius">
              <div className="item-15-group">
                <div className="item-15-group-image">
                  <img src={width200_3Image} alt="OpenCog Hyperon discovery" />
                </div>
                <div className="item-15-group-content">
                  <p>When was OpenCog Hyperon discovered?</p>
                  <p className="read-more">
                    <a href="/when-was-hyperon">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-15-left">
            <div className="item-15-left-child-1 item-15-radius">
              <div className="item-15-group">
                <div className="item-15-group-image">
                  <img
                    src={width200Image}
                    alt="Who discovered OpenCog Hyperon"
                  />
                </div>
                <div className="item-15-group-content">
                  <p>Who is discovered?</p>
                  <p className="read-more">
                    <a href="/what-is-hyperon">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-15-left-child-2 item-15-radius">
              <div className="item-15-group">
                <div className="item-15-group-image">
                  <img src={width200_3Image} alt="OpenCog Hyperon tokenomics" />
                </div>
                <div className="item-15-group-content">
                  <p>Tokenomics</p>
                  <p className="read-more">
                    <a href="/when-was-hyperon">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/jam-galaxy">JAM GALAXY</a>
        </p>
      </div>
    </section>
  );
}

export default Section15;
