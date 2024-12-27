import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section59.css";

function Section59() {
  const [isVisible59, setIsVisible59] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-59-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible59(true); // Image has entered the viewport
        } else {
          setIsVisible59(false); // Image has left the viewport
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
    <section id="59" className="main-section">
      <div className="items-59">
        <div className="item-59-left">
          <div
            className={`item-59-left-image ${
              isVisible59 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
        <div className="item-59-right">
          <div className="item-59-right-content">
            <div className="item-59-right-content-child">
              <h2 className={isVisible59 ? "slide-in" : "slide-out"}>
                What is HyperCycle
              </h2>
              <p>
                HyperCycle is the network for the Internet of AI. Our mission is
                to facilitate direct AI-to-AI communication without the need for
                intermediaries. HyperCycle acts as the enabler in an ecosystem
                of mutually supportive companies contributing to building
                elements of the Internet of AI. It focuses on enabling AI
                systems to communicate and collaborate efficiently. In the
                current landscape, this process is often slow and costly.
                HyperCycle addresses these challenges by offering a secure
                global connection system with verifiable identities, eliminating
                the need for centralised parties. It provides a safe platform
                for AI to interact directly without intermediaries.
              </p>
              <h2 className={isVisible59 ? "slide-in" : "slide-out"}>
                When was HyperCycle Announced?
              </h2>
              <p>
                Hypercycle was announced to be created during the LEAP 2022
                Emerging Technology conference on February 3, 2022.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section59;
