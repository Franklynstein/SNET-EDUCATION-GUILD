import "../main.css";
import "./Section12.css";
import width200 from "../assets/img/width-200.jpg";
import t3 from "../assets/img/t_3.jpg";
import width200PNG from "../assets/img/width-200.png";
import width200_3 from "../assets/img/width-200_3.png";
import navigatorImage from "../assets/img/navigator-image.png";

function Section12() {
  return (
    <section id="12" className="main-section main-section-flex">
      <div className="items-12">
        <h2>Jam Galaxy</h2>
        <div className="item-12-container">
          <div className="item-12-right">
            <div className="item-12-right-child-1 item-12-radius">
              <div className="item-12-group">
                <div className="item-12-group-image">
                  <img src={width200} alt="" />
                </div>
                <div className="item-12-group-content">
                  <p>What is Jam Galaxy?</p>
                  <p className="read-more">
                    <a href="/what-is-jam">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-12-right-child-2 item-12-radius">
              <div className="item-12-group">
                <div className="item-12-group-image">
                  <img src={t3} alt="" />
                </div>
                <div className="item-12-group-content">
                  <p>When was Jam Galaxy discovered?</p>
                  <p className="read-more">
                    <a href="/when-was-jam">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-12-left">
            <div className="item-12-left-child-1 item-12-radius">
              <div className="item-12-group">
                <div className="item-12-group-image">
                  <img src={width200PNG} alt="" />
                </div>
                <div className="item-12-group-content">
                  <p>Who is Discovered?</p>
                  <p className="read-more">
                    <a href="/what-is-jam">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-12-left-child-2 item-12-radius">
              <div className="item-12-group">
                <div className="item-12-group-image">
                  <img src={width200_3} alt="" />
                </div>
                <div className="item-12-group-content">
                  <p>Tokenomics</p>
                  <p className="read-more">
                    <a href="/when-was-jam">Read more {">"}</a>
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
          <a href="/nunet">NUNET</a>
        </p>
      </div>
    </section>
  );
}

export default Section12;
