import { useEffect, useState } from "react";
import "../main.css";
import "./Section8.css";
import width_800 from "../assets/img/width-800.png";
import navigatorImage from "../assets/img/navigator-image.png";

function Section8() {
  const [isVisible8, setIsVisible8] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-8-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible8(true); // Image has entered the viewport
        } else {
          setIsVisible8(false); // Image has left the viewport
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
    <section id="8" className="main-section">
      <div className="items-8">
        <div className="item-8-left">
          <div className="item-8-left-image">
            <img src={width_800} alt="Rejuve.Bio Illustration" />
          </div>
        </div>
        <div className="item-8-right">
          <div className="item-8-right-content">
            <div className="item-8-right-content-child">
              <h2 className={isVisible8 ? "slide-in" : "slide-out"}>
                Who discovered Rejuve.Bio?
              </h2>
              <p>
                Chief Executive Officer - Kennedy Matsagas Schaal
                <br />
                Chief Biotech Officer - Dr. Axel Schumacher
                <br />
                Chief Science Officer - Michael Duncan
              </p>
              <h2 className={isVisible8 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                Rejuve.AI uses RJV tokens to reward users for contributing data
                to longevity research, redeemable for services and products.
                Users are assigned Data NFTs to manage data permissions and
                Product NFTs to share benefits from products developed using
                their data.
              </p>
              <h2 className={isVisible8 ? "slide-in" : "slide-out"}>MISC</h2>
              <p>
                Rapid Development of longevity treatments via Neural-Symbolic AI
                analysis. Using Methuselah Flies, which are long-lived
                organisms. Disease targets identified via high-resolution
                multi-omics data and AI tools.
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
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/nunet">NUNET</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section8;
