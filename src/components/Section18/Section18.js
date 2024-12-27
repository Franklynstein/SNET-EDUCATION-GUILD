import "../main.css";
import "./Section18.css";
import width_800_2 from "../assets/img/width-800_2.png"; // Import the image from the new location
import t_image from "../assets/img/t.jpg"; // Import the image from the new location
import width_200 from "../assets/img/width-200.png"; // Import the image from the new location
import width_200_2 from "../assets/img/width-200_2.png"; // Import the image from the new location
import width_200_3 from "../assets/img/width-200_3.png"; // Import the image from the new location

function Section18() {
  return (
    <section id="18" className="main-section main-section-flex">
      <div className="items-18">
        <h2>Cogito</h2>
        <div className="item-18-container">
          <div className="item-18-right">
            <div className="item-18-right-child-1 item-18-radius">
              <div className="item-18-group">
                <div className="item-18-group-image">
                  <img src={width_800_2} alt="What is Cogito?" />{" "}
                  {/* Using imported image */}
                </div>
                <div className="item-18-group-content">
                  <p>What is Cogito?</p>
                </div>
              </div>
            </div>
            <div className="item-18-right-child-2 item-18-radius">
              <div className="item-18-group">
                <div className="item-18-group-image">
                  <img src={t_image} alt="How does it operate?" />{" "}
                  {/* Using imported image */}
                </div>
                <div className="item-18-group-content">
                  <p>How does it operate?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-18-left">
            <div className="item-18-left-child-1 item-18-radius">
              <div className="item-18-group">
                <div className="item-18-group-image">
                  <img src={width_200} alt="Who is Discovered?" />{" "}
                  {/* Using imported image */}
                </div>
                <div className="item-18-group-content">
                  <p>Who is Discovered?</p>
                </div>
              </div>
            </div>
            <div className="item-18-left-child-2 item-18-radius">
              <div className="item-18-group">
                <div className="item-18-group-image">
                  <img src={width_200_2} alt="When Cogito Announced?" />{" "}
                  {/* Using imported image */}
                </div>
                <div className="item-18-group-content">
                  <p>When Cogito Announced?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-18-center item-18-radius">
          <div className="item-18-group">
            <div className="item-18-group-image">
              <img src={width_200_3} alt="Tokenomics" />{" "}
              {/* Using imported image */}
            </div>
            <div className="item-18-group-content">
              <p>Tokenomics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section18;
