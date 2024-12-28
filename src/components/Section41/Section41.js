import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section41.css";

function Section41() {
  const [isVisible41, setIsVisible41] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-41-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible41(true); // Image has entered the viewport
        } else {
          setIsVisible41(false); // Image has left the viewport
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
    <section id="40" className="main-section">
      <div className="items-41">
        <div className="item-41-left">
          <div
            className={`item-41-left-image ${
              isVisible41 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
        <div className="item-41-right">
          <div className="item-41-right-content">
            <div className="item-41-right-content-child">
              <h2 className={isVisible41 ? "slide-in" : "slide-out"}>
                How Does It
                <br />
                Operate?
              </h2>
              <p>
                Mindplex operates as both a magazine and a social media
                platform, providing a dynamic and interactive space for
                creators, influencers, and media enthusiasts to connect,
                collaborate, and share their ideas.
              </p>
              <p>
                Mindplex using Al-powered Content Factory facilitates seamless
                content creation and curation, enabling members to express their
                creativity, explore new storytelling techniques, and engage with
                audiences in innovative ways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section41;
