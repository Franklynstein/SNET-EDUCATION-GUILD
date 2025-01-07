import "../main.css";
import "./Section43.css";
import tImage from "../assets/img/t.jpg";
import width200 from "../assets/img/width-200.png";
// import width2002 from "../assets/img/width-200_2.png";
import width2003 from "../assets/img/width-200_3.png";
import width_174 from "../assets/img/width-174.png";
import width_200_5 from "../assets/img/width-200_5.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section43() {
  return (
    <section id="43" className="main-section main-section-flex">
      <div className="items-43">
        <h2>Ambassadors</h2>
        <div className="item-43-container">
          <div className="item-43-right">
            <div className="item-43-right-child-1 item-43-radius">
              <div className="item-43-group">
                <div className="item-43-group-image">
                  <img src={width_174} alt="Ambassadors" />
                </div>
                <div className="item-43-group-content">
                  <p>What is Ambassadors?</p>
                  <p className="read-more">
                    <a href="/what-is-ambassadors">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-43-right-child-2 item-43-radius">
              <div className="item-43-group">
                <div className="item-43-group-image">
                  <img src={tImage} alt="How it operates" />
                </div>
                <div className="item-43-group-content">
                  <p>
                    HOW does it <br />
                    operate?
                  </p>
                  <p className="read-more">
                    <a href="/how-does-ambassadors">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-43-left">
            <div className="item-43-left-child-1 item-43-radius">
              <div className="item-43-group">
                <div className="item-43-group-image">
                  <img src={width200} alt="Who is Discovered" />
                </div>
                <div className="item-43-group-content">
                  <p>Who is Discovered?</p>
                  <p className="read-more">
                    <a href="/who-discovered-ambassadors">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-43-left-child-2 item-43-radius">
              <div className="item-43-group">
                <div className="item-43-group-image">
                  <img src={width_200_5} alt="When Ambassadors Announced" />
                </div>
                <div className="item-43-group-content">
                  <p>How To Join</p>
                  <p className="read-more">
                    <a href="/what-is-ambassadors">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-43-center item-43-radius">
          <div className="item-43-group">
            <div className="item-43-group-image">
              <img src={width2003} alt="Tokenomics" />
            </div>
            <div className="item-43-group-content">
              <p>Tokenomics</p>
              <p className="read-more">
                <a href="/ambassadors-tokenomics">Read more {">"}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/mindplex">MINDPLEX</a>
        </p>
      </div>
    </section>
  );
}

export default Section43;
