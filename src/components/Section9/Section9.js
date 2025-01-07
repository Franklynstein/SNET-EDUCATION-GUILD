import "../main.css";
import "./Section9.css";
import width_800_2 from "../assets/img/width-800_2.png";
import t from "../assets/img/t.jpg";
import width_200 from "../assets/img/width-200.png";
import width_200_2 from "../assets/img/width-200_2.png";
import width_200_3 from "../assets/img/width-200_3.png";
import navigatorImage from "../assets/img/navigator-image.png";

function Section9() {
  return (
    <section id="9" className="main-section main-section-flex">
      <div className="items-9">
        <h2>Nunet</h2>
        <div className="item-9-container">
          <div className="item-9-right">
            <div className="item-9-right-child-1 item-9-radius">
              <div className="item-9-group">
                <div className="item-9-group-image">
                  <img src={width_800_2} alt="Nunet illustration" />
                </div>
                <div className="item-9-group-content">
                  <p>What is NUNET?</p>
                  <p className="read-more">
                    <a href="/what-is-nunet">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-9-right-child-2 item-9-radius">
              <div className="item-9-group">
                <div className="item-9-group-image">
                  <img src={t} alt="Nunet operation" />
                </div>
                <div className="item-9-group-content">
                  <p>
                    HOW does it <br />
                    operate?
                  </p>
                  <p className="read-more">
                    <a href="/who-discovered-rejuve-bio">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-9-left">
            <div className="item-9-left-child-1 item-9-radius">
              <div className="item-9-group">
                <div className="item-9-group-image">
                  <img src={width_200} alt="Nunet discovered" />
                </div>
                <div className="item-9-group-content">
                  <p>Who is Discovered?</p>
                  <p className="read-more">
                    <a href="/who-discovered-rejuve-bio">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-9-left-child-2 item-9-radius">
              <div className="item-9-group">
                <div className="item-9-group-image">
                  <img src={width_200_2} alt="Nunet announcement" />
                </div>
                <div className="item-9-group-content">
                  <p>
                    When NUNET <br />
                    Announced?
                  </p>
                  <p className="read-more">
                    <a href="/when-was-nunet">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-9-center item-9-radius">
          <div className="item-9-group">
            <div className="item-9-group-image">
              <img src={width_200_3} alt="Nunet tokenomics" />
            </div>
            <div className="item-9-group-content">
              <p>Tokenomics</p>
              <p className="read-more">
                <a href="/when-was-nunet">Read more {">"}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/rejuve-bio">REJUVE.BIO</a>
        </p>
      </div>
    </section>
  );
}

export default Section9;
