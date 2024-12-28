import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section40.css";

function Section40() {
  const [isVisible40, setIsVisible40] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-40-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible40(true); // Image has entered the viewport
        } else {
          setIsVisible40(false); // Image has left the viewport
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
      <div className="items-40">
        <div className="item-40-left">
          <div
            className={`item-40-left-image ${
              isVisible40 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
        <div className="item-40-right">
          <div className="item-40-right-content">
            <div className="item-40-right-content-child">
              <h2 className={isVisible40 ? "slide-in" : "slide-out"}>
                Who Is Discovered?
              </h2>
              <p>
                Hruy Tsegaye – CEO and Co-founder
                <br />
                Amara Angelica – Senior Editor/Co-founder
                <br />
                Ben Goertzel – Editor-in-Chief
                <br />
                Conor O’Higgins – COO
                <br />
                Lisa Rein – Producer/Editor
                <br />
                Leykun Ejigu – Developer
                <br />
                Debashis Saha – UX Designer
                <br />
                Esubalew Amenu – Lead Backend Developer
                <br />
                Dawit Mekonnen – Web Developer
                <br />
                Anna Ostrovska – UI Designer
                <br />
                Tesfaye Assefa (Tesfu) – Illustrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section40;
