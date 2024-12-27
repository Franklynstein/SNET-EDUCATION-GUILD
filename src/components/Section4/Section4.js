import { useEffect, useState } from "react";

import "../main.css";
import "./Section4.css";
import width_369 from "../assets/img/width-369.png";

function Section4() {
  const [isVisible4, setIsVisible4] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-4-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible4(true); // Image has entered the viewport
        } else {
          setIsVisible4(false); // Image has left the viewport
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
    <section id="4" className="main-section">
      <div className="items-4">
        <div className="item-4-left">
          <div
            className={`item-4-left-image ${
              isVisible4 ? "slide-in" : "slide-out"
            }`}
          >
            <img src={width_369} alt="" />
          </div>
        </div>
        <div className="item-4-right">
          <div className="item-4-right-content">
            <div className="item-4-right-content-child">
              <h2 className={isVisible4 ? "slide-in" : "slide-out"}>
                What is Rejuve.AI?
              </h2>
              <p>
                It is a longevity App And AI for human body analysis targeted to
                <br />
                increase human longevity. The app was launched in 2023.
              </p>
              <h2 className={isVisible4 ? "slide-in" : "slide-out"}>
                Who discovered Rejuve.AI?
              </h2>
              <p>
                Chief Technology Officer - Dr. Deborah Duong
                <br />
                Chief Executive Officer - Jasmine Smith
                <br />
                Chief AI Scientist - Dr. Ben Goertzel
              </p>
              <h2 className={isVisible4 ? "slide-in" : "slide-out"}>
                How does it work?
              </h2>
              <p>
                Bayesian Network=The Bayesian Network stands at the intersection
                <br />
                of probability and graph theory. It's a powerful statistical
                tool that
                <br />
                enables us to model complex relationships in data and infer
                potential
                <br />
                outcomes.
                <br />
                Generative Cooperative Network (GCN)The Generative Cooperative
                <br />
                Network (GCN) is a groundbreaking approach that blends the
                <br />
                capabilities of generative and cooperative models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
