import { useEffect, useState } from "react";
import "../main.css";
import "./Section44.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section44() {
  const [isVisible44, setIsVisible44] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-44-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible44(true); // Image has entered the viewport
        } else {
          setIsVisible44(false); // Image has left the viewport
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
    <section id="44" className="main-section">
      <div className="items-44">
        <div className="item-44-left">
          <div
            className={`item-44-left-image ${
              isVisible44 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-44-right">
          <div className="item-44-right-content">
            <div className="item-44-right-content-child">
              <h2 className={isVisible44 ? "slide-in" : "slide-out"}>
                What is Ambassadors
              </h2>
              <p>
                The SingularityNET Community Ambassador Program is a
                community-driven initiative designed to advance the growth and
                adoption of decentralized AI/AGI (Artificial General
                Intelligence) within the SingularityNET ecosystem. The program
                aims to promote the ecosystem through community participation,
                raising awareness, and rewarding contributions.
              </p>
              <h2 className={isVisible44 ? "slide-in" : "slide-out"}>
                How To Join
              </h2>
              <p>
                Attend weekly Town Hall meetings (Tuesdays at 1800 UTC on the
                SingularityNET Discord server).
              </p>
              <p>
                Use Dework to browse and select tasks matching your interests
                and skills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/ambassadors">AMBASSADORS</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/ambassadors">AMBASSADORS</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section44;
