import "../main.css";
import "./Section1.css";
import navigatorImage from "../assets/img/navigator-image.png";
import { useEffect } from "react";

function Section1() {

  useEffect(() => {
    const cards = document.querySelectorAll('.item-width');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate');
      }, index * 200); // Adjust delay for staggered effect
    });
  }, []);
  return (
    <section className="main-section">
      <div className="container">
        <h1>SingularityNET</h1>
        <h2>Education Project</h2>
      </div>
      <div className="items">
        <a href="/" className="a-top-right">
          <div className="item-top-right item-width"></div>
        </a>
        <a href="/" className="a-right">
          <div className="item-right item-width"></div>
        </a>
        <a href="/" className="a-left">
          <div className="item-left item-width"></div>
        </a>
        <a href="/" className="a-top-left">
          <div className="item-top-left item-width"></div>
        </a>
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
