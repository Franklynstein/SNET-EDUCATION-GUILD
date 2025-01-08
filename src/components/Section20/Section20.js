import { useEffect, useState } from "react";
import "../main.css";
import "./Section20.css";
import width_800_3 from "../assets/img/width-800_3.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section20() {
  const [isVisible20, setIsVisible20] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-20-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible20(true); // Image has entered the viewport
        } else {
          setIsVisible20(false); // Image has left the viewport
        }
      });
    };

    // Intersection Observer options
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the viewport
      threshold: 0.5, // Trigger when 50% of the image is in view
    };

    // Create the Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, options);

    // Start observing the target element
    if (target) {
      observer.observe(target);
    }

    // Cleanup observer on component unmount
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section id="20" className="main-section">
      <div className="items-20">
        <div className="item-20-left">
          <div
            className={`item-20-left-image ${
              isVisible20 ? "slide-in" : "slide-out"
            }`}
          >
            <img src={width_800_3} alt="" /> {/* Using imported image */}
          </div>
        </div>
        <div className="item-20-right">
          <div className="item-20-right-content">
            <div className="item-20-right-content-child">
              <h2 className={isVisible20 ? "slide-in" : "slide-out"}>
                When was it founded?
              </h2>
              <p>Cogito was established in 2022.</p>
              <h2 className={isVisible20 ? "slide-in" : "slide-out"}>
                How does Cogito work?
              </h2>
              <p>
                Cogito operates by allowing investors to select tokenized
                investment
                <br />
                offerings and invest with USDC or bank wire. Investors receive
                fund
                <br />
                tokens as proofofownership,
                <br />
                which can be utilized for liquidity and leverage in Defi
                protocols.
              </p>
              <h2 className={isVisible20 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                TUND offers a basket of government treasury bonds with a yield
                of
                <br />
                5%-5.5%.
                <br />
                GFUND provides exposure to green bonds with a ~5% yield, while
                <br />
                XFUND represents a basket of tech and Al equities for higher
                returns.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/cogito">COGITO</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/sophia-verse">SOPHIA VERSE</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section20;
