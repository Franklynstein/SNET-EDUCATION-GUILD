import "../main.css";
import "./Section21.css";
import width_200_2 from "../assets/img/width-200_2.jpg";
import tImage from "../assets/img/t.jpg";
import width_200 from "../assets/img/width-200.png";
import width_200_2_2 from "../assets/img/width-200_2.png";
import width_200_3 from "../assets/img/width-200_3.png";

function Section21() {
  return (
    <section id="21" className="main-section main-section-flex">
      <div className="items-21">
        <h2>Sophia Verse</h2>
        <div className="item-21-container">
          <div className="item-21-right">
            <div className="item-21-right-child-1 item-21-radius">
              <div className="item-21-group">
                <div className="item-21-group-image">
                  <img src={width_200_2} alt="Sophia Verse" />
                </div>
                <div className="item-21-group-content">
                  <p>What is Sophia Verse?</p>
                </div>
              </div>
            </div>
            <div className="item-21-right-child-2 item-21-radius">
              <div className="item-21-group">
                <div className="item-21-group-image">
                  <img src={tImage} alt="How does it operate?" />
                </div>
                <div className="item-21-group-content">
                  <p>
                    HOW does it <br />
                    operate?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-21-left">
            <div className="item-21-left-child-1 item-21-radius">
              <div className="item-21-group">
                <div className="item-21-group-image">
                  <img src={width_200} alt="Who is Discovered?" />
                </div>
                <div className="item-21-group-content">
                  <p>Who is Discovered?</p>
                </div>
              </div>
            </div>
            <div className="item-21-left-child-2 item-21-radius">
              <div className="item-21-group">
                <div className="item-21-group-image">
                  <img src={width_200_2_2} alt="When Sophia Verse Announced?" />
                </div>
                <div className="item-21-group-content">
                  <p>
                    When Sophia Verse <br />
                    Announced?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-21-center item-21-radius">
          <div className="item-21-group">
            <div className="item-21-group-image">
              <img src={width_200_3} alt="Tokenomics" />
            </div>
            <div className="item-21-group-content">
              <p>Tokenomics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section21;
