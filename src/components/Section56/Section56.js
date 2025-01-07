import { useEffect, useState } from "react";
import "../main.css";
import "./Section56.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section56() {
  const [isVisible56, setIsVisible56] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-56-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible56(true); // Image has entered the viewport
        } else {
          setIsVisible56(false); // Image has left the viewport
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
    <section id="56" className="main-section">
      <div className="items-56">
        <div className="item-56-left">
          <div
            className={`item-56-left-image ${
              isVisible56 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-56-right">
          <div className="item-56-right-content">
            <div className="item-56-right-content-child">
              <h2 className={isVisible56 ? "slide-in" : "slide-out"}>
                How Does it Operate
              </h2>
              <p>
                Twin Protocol's decentralized model leverages blockchain
                technology to create a democratic, transparent, and secure
                ecosystem for AI Twins.
              </p>
              <p>
                Twin Protocol harnesses the transformative power of blockchain
                technology to create a unique and secure platform for verifying
                identity of the AI Twins.
              </p>
              <p>
                Security and privacy are paramount in Twin Protocol's platform,
                designed to ensure the highest level of protection for AI Twins
                and user data.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/twin-protocol">TWIN PROTOCOL</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/twin-protocol">TWIN PROTOCOL</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section56;
