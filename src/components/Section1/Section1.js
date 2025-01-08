import "../main.css";
import "./Section1.css";
import navigatorImage from "../assets/img/navigator-image.png";

function Section1() {
  return (
    <section className="main-section">
      <div className="container">
        <h1>SingularityNET</h1>
        <h2>Education Project</h2>
      </div>
      <div className="items">
        <div className="item-top-right item-width">Red</div>
        <div className="item-right item-width">Red</div>
        <div className="item-left item-width">Red</div>
        <div className="item-top-left item-width">Red</div>
      </div>
      <div id="none-navigator" className="next-div-1">
        <p>
          <a href="/features">FEATURES</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
      {/* <img src="assets/img/width_1402.jpg" alt="" /> */}
    </section>
  );
}

export default Section1;
