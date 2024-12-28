import "../main.css";
import "./Section6.css";
import width_756 from "../assets/img/width-756.jpg";
import width_200_3 from "../assets/img/width-200_3.png";
import width_200 from "../assets/img/width-200.png";
import t_2 from "../assets/img/t_2.jpg";

function Section6() {
  return (
    <section id="6" className="main-section main-section-flex">
      <div className="items-6">
        <h2>Rejuve.Bio</h2>
        <div className="item-6-container">
          <div className="item-6-right">
            <div className="item-6-right-child-1 item-6-radius">
              <div className="item-6-group">
                <div className="item-6-group-image">
                  <img src={width_756} alt="What is Rejuve.AI" />
                </div>
                <div className="item-6-group-content">
                  <p>What is Rejuve.AI</p>
                </div>
              </div>
            </div>
            <div className="item-6-right-child-2 item-6-radius">
              <div className="item-6-group">
                <div className="item-6-group-image">
                  <img src={width_200_3} alt="Tokenomics" />
                </div>
                <div className="item-6-group-content">
                  <p>Tokenomics</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-6-left">
            <div className="item-6-left-child-1 item-6-radius">
              <div className="item-6-group">
                <div className="item-6-group-image">
                  <img src={width_200} alt="Who Discovered It?" />
                </div>
                <div className="item-6-group-content">
                  <p>Who Discovered?</p>
                </div>
              </div>
            </div>
            <div className="item-6-left-child-2 item-6-radius">
              <div className="item-6-group">
                <div className="item-6-group-image">
                  <img src={t_2} alt="Miscellaneous" />
                </div>
                <div className="item-6-group-content">
                  <p>Misc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section6;
