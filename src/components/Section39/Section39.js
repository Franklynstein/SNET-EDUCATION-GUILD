import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section39.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section39() {
  const [isVisible39, setIsVisible39] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-39-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible39(true); // Image has entered the viewport
        } else {
          setIsVisible39(false); // Image has left the viewport
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
    <section id="39" className="main-section">
      <div className="items-39">
        <div className="item-39-left">
          <div
            className={`item-39-left-image ${
              isVisible39 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
        <div className="item-39-right">
          <div className="item-39-right-content">
            <div className="item-39-right-content-child">
              <h2 className={isVisible39 ? "slide-in" : "slide-out"}>
                What is MINDPLEX
              </h2>
              <p>
                Mindplex is a ground-breaking AI technology project that offers
                a comprehensive suite of AI tools and services specifically
                designed for the media industry. Our platform operates as a
                membership network where members actively guide and contribute
                to the content creation process. With Mindplex, we are
                reimagining the future of media by combining cutting-edge
                concepts, blockchain tokens, and an innovative reputation
                system.
              </p>
              <h2 className={isVisible39 ? "slide-in" : "slide-out"}>
                When was SingularityNET Announced?
              </h2>
              <p>
                In February 2021, SingularityNET published a blog post
                officially announcing Mindplex as an early-stage AGI system they
                were developing. The first codebase for Mindplex was open
                sourced on GitHub also in February 2021.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/mindplex">MINDPLEX</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/mindplex">MINDPLEX</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section39;
