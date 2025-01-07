import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section52.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section52() {
  const [isVisible52, setIsVisible52] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-52-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible52(true); // Image has entered the viewport
        } else {
          setIsVisible52(false); // Image has left the viewport
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
    <section id="52" className="main-section">
      <div className="items-52">
        <div className="item-52-left">
          <div
            className={`item-52-left-image ${
              isVisible52 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
        <div className="item-52-right">
          <div className="item-52-right-content">
            <div className="item-52-right-content-child">
              <h2 className={isVisible52 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>There is no information about Tokenomics from TrueAGI</p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/trueagi">TRUEAGI</a>
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

export default Section52;
