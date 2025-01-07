import { useEffect, useState } from "react";
import "../main.css";
import "./Section54.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section54() {
  const [isVisible54, setIsVisible54] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-54-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible54(true); // Image has entered the viewport
        } else {
          setIsVisible54(false); // Image has left the viewport
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
    <section id="54" className="main-section">
      <div className="items-54">
        <div className="item-54-left">
          <div
            className={`item-54-left-image ${
              isVisible54 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-54-right">
          <div className="item-54-right-content">
            <div className="item-54-right-content-child">
              <h2 className={isVisible54 ? "slide-in" : "slide-out"}>
                What is Twin Protocol
              </h2>
              <p>
                Twin Protocol is pioneering a new era of digital interaction,
                transforming how leaders and visionaries elevate their digital
                presence.
              </p>
              <h2 className={isVisible54 ? "slide-in" : "slide-out"}>
                When Twin Protocol Announced
              </h2>
              <p>
                Twin Protocol Foundational development started during Q3 2023
                which also includes introduction of Dr. Ben Goertzel’s digital
                Twin at AI World Fair 2023
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

export default Section54;
