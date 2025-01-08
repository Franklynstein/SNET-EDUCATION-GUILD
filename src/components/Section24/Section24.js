import "../main.css";
import "./Section24.css";
import width200_3 from "../assets/img/width-200_3.jpg";
import t from "../assets/img/t.jpg";
import width200 from "../assets/img/width-200.png";
import width200_2 from "../assets/img/width-200_2.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section24() {
  return (
    <section id="24" className="main-section main-section-flex">
      <div className="items-24">
        <h2>Zarqa</h2>
        <div className="item-24-container">
          <div className="item-24-right">
            <div className="item-24-right-child-1 item-24-radius">
              <div className="item-24-group">
                <div className="item-24-group-image">
                  <img src={width200_3} alt="" />
                </div>
                <div className="item-24-group-content">
                  <p>What is Zarqa?</p>
                  <p className="read-more">
                    <a href="/what-is-zarqa">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-24-right-child-2 item-24-radius">
              <div className="item-24-group">
                <div className="item-24-group-image">
                  <img src={t} alt="" />
                </div>
                <div className="item-24-group-content">
                  <p>
                    HOW does it <br />
                    operate?
                  </p>
                  <p className="read-more">
                    <a href="/how-does-zarqa">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-24-left">
            <div className="item-24-left-child-1 item-24-radius">
              <div className="item-24-group">
                <div className="item-24-group-image">
                  <img src={width200} alt="" />
                </div>
                <div className="item-24-group-content">
                  <p>Who is Discovered?</p>
                  <p className="read-more">
                    <a href="/what-is-zarqa">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-24-left-child-2 item-24-radius">
              <div className="item-24-group">
                <div className="item-24-group-image">
                  <img src={width200_2} alt="" />
                </div>
                <div className="item-24-group-content">
                  <p>
                    When Zarqa <br />
                    Announced?
                  </p>
                  <p className="read-more">
                    <a href="/what-is-zarqa">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-24-center item-24-radius">
          <div className="item-24-group">
            <div className="item-24-group-image">
              <img src={width200_3} alt="" />
            </div>
            <div className="item-24-group-content">
              <p>Tokenomics</p>
              <p className="read-more">
                <a href="/zarqa-tokenomics">Read more {">"}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/sophia-verse">SOPHIA VERSE</a>
        </p>
      </div>
    </section>
  );
}

export default Section24;
