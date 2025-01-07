import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section49.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section49() {
  const [isVisible49, setIsVisible49] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-49-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible49(true); // Image has entered the viewport
        } else {
          setIsVisible49(false); // Image has left the viewport
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
    <section id="49" className="main-section">
      <div className="items-49">
        <div className="item-49-left">
          <div
            className={`item-49-left-image ${
              isVisible49 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
        <div className="item-49-right">
          <div className="item-49-right-content">
            <div className="item-49-right-content-child">
              <h2 className={isVisible49 ? "slide-in" : "slide-out"}>
                What is TRUEAGI
              </h2>
              <p>
                TrueAGI is a spinoff project from SingularityNET, providing both
                centralized and decentralized custom AGI as a Service (AGIaaS).
                At its core is the Opencog Hyperon software framework, a novel
                version of the Opencog AGI framework.
              </p>
              <h2 className={isVisible49 ? "slide-in" : "slide-out"}>
                When was TRUEAGI Announced?
              </h2>
              <p>
                TrueAGI is a spinoff project from SingularityNET, providing both
                centralized and decentralized custom AGI as a Service (AGIaaS).
                At its core is the Opencog Hyperon software framework, a novel
                version of the Opencog AGI framework.
              </p>
              <p>
                The comercial usage of TrueAGI’s software is also expected begin
                in 2024, contributing to the development of AGI over several
                years.
              </p>
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
          <a href="/trueagi">TRUEAGI</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section49;
