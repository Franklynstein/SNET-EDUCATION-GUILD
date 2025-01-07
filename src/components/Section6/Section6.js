import "../main.css";
import "./Section6.css";
// import width_756 from "../assets/img/width-756.jpg";
import width_200_5 from "../assets/img/width-200_5.jpg";
import width_200_3 from "../assets/img/width-200_3.png";
import width_200 from "../assets/img/width-200.png";
import t_2 from "../assets/img/t_2.jpg";
import navigatorImage from "../assets/img/navigator-image.png";

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
                  <img src={width_200_5} alt="What is Rejuve.AI" />
                </div>
                <div className="item-6-group-content">
                  <p>What is Rejuve.BIO</p>
                  <p className="read-more">
                    <a href="/what-is-rejuve-bio">Read more {">"}</a>
                  </p>
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
                  <p className="read-more">
                    <a href="/who-discovered-rejuve-bio">Read more {">"}</a>
                  </p>
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
                  <p className="read-more">
                    <a href="/who-discovered-rejuve-bio">Read more {">"}</a>
                  </p>
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
                  <p className="read-more">
                    <a href="/who-discovered-rejuve-bio">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-6">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/rejuve-ai">REJUVE.AI</a>
        </p>
      </div>
    </section>
  );
}

export default Section6;
