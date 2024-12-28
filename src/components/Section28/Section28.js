import "../main.css";
import "./Section28.css";
import width170 from "../assets/img/width-170.jpg";
import tImage from "../assets/img/t.jpg";
import width200 from "../assets/img/width-200.png";
import width200_2 from "../assets/img/width-200_2.png";
import width200_3 from "../assets/img/width-200_3.png";

function Section28() {
  return (
    <section id="28" className="main-section main-section-flex">
      <div className="items-28">
        <h2>SingularityDAO</h2>
        <div className="item-28-container">
          <div className="item-28-right">
            <div className="item-28-right-child-1 item-28-radius">
              <div className="item-28-group">
                <div className="item-28-group-image">
                  <img src={width170} alt="" />
                </div>
                <div className="item-28-group-content">
                  <p>What is SingularityDAO?</p>
                </div>
              </div>
            </div>
            <div className="item-28-right-child-2 item-28-radius">
              <div className="item-28-group">
                <div className="item-28-group-image">
                  <img src={tImage} alt="" />
                </div>
                <div className="item-28-group-content">
                  <p>
                    HOW does it <br />
                    operate?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-28-left">
            <div className="item-28-left-child-1 item-28-radius">
              <div className="item-28-group">
                <div className="item-28-group-image">
                  <img src={width200} alt="" />
                </div>
                <div className="item-28-group-content">
                  <p>Who is Discovered?</p>
                </div>
              </div>
            </div>
            <div className="item-28-left-child-2 item-28-radius">
              <div className="item-28-group">
                <div className="item-28-group-image">
                  <img src={width200_2} alt="" />
                </div>
                <div className="item-28-group-content">
                  <p>
                    When SingularityDAO <br />
                    Announced?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-28-center item-28-radius">
          <div className="item-28-group">
            <div className="item-28-group-image">
              <img src={width200_3} alt="" />
            </div>
            <div className="item-28-group-content">
              <p>Tokenomics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section28;
