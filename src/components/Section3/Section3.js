import "../main.css";
import "./Section3.css";
import width756 from "../assets/img/width-756.jpg";
import t from "../assets/img/t.jpg";
import width200_2 from "../assets/img/width-200_2.png";
import width200 from "../assets/img/width-200.png";
import width200_3 from "../assets/img/width-200_3.png";

function Section3() {
  return (
    <section id="3" className="main-section main-section-flex">
      <div className="items-3">
        <h2>Rejuve.AI</h2>
        <div className="item-3-container">
          <div className="item-3-right">
            <div className="item-3-right-child-1 item-3-radius">
              <div className="item-3-group">
                <div className="item-3-group-image">
                  <img src={width756} alt="" />
                </div>
                <div className="item-3-group-content">
                  <p>What is Rejuve.AI</p>
                </div>
              </div>
            </div>
            <div className="item-3-right-child-2 item-3-radius">
              <div className="item-3-group">
                <div className="item-3-group-image">
                  <img src={t} alt="" />
                </div>
                <div className="item-3-group-content">
                  <p>
                    HOW does it <br />
                    operate?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-3-left">
            <div className="item-3-left-child-1 item-3-radius">
              <div className="item-3-group">
                <div className="item-3-group-image">
                  <img src={width200} alt="" />
                </div>
                <div className="item-3-group-content">
                  <p>Who Discovered it?</p>
                </div>
              </div>
            </div>
            <div className="item-3-left-child-2 item-3-radius">
              <div className="item-3-group">
                <div className="item-3-group-image">
                  <img src={width200_2} alt="" />
                </div>
                <div className="item-3-group-content">
                  <p>
                    When Rejuve.AI <br />
                    Announced?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-3-center item-3-radius">
          <div className="item-3-group">
            <div className="item-3-group-image">
              <img src={width200_3} alt="" />
            </div>
            <div className="item-3-group-content">
              <p>Tokenomics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
