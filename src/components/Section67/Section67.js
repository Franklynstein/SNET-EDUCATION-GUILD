import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section67.css";

function Section67() {
  const [isVisible67, setIsVisible67] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-67-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible67(true); // Image has entered the viewport
        } else {
          setIsVisible67(false); // Image has left the viewport
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
    <section id="67" className="main-section">
      <div className="items-67">
        <div className="item-67-left">
          <div
            className={`item-67-left-image ${
              isVisible67 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
        <div className="item-67-right">
          <div className="item-67-right-content">
            <div className="item-67-right-content-child">
              <h2 className={isVisible67 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                There is no information about Tokenomics from Awakening Health
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section67;
