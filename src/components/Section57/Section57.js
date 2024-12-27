import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section57.css";

function Section57() {
  const [isVisible57, setIsVisible57] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-57-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible57(true); // Image has entered the viewport
        } else {
          setIsVisible57(false); // Image has left the viewport
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
    <section id="57" className="main-section">
      <div className="items-57">
        <div className="item-57-left">
          <div
            className={`item-57-left-image ${
              isVisible57 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
        <div className="item-57-right">
          <div className="item-57-right-content">
            <div className="item-57-right-content-child">
              <h2 className={isVisible57 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                The Twin AI Utility token [Ticker: TWIN] is designed with a
                fixed supply to ensure scarcity and value appreciation over
                time. The allocation, described below, is meticulously planned
                to support ecosystem growth, incentivize participation, and
                secure the network.
                <br /> Total Supply: The total supply is capped to create
                scarcity and drive value. A significant portion is reserved for
                community incentives, ensuring active participation and
                engagement.
                <br />
                Distribution: The distribution strategy encompasses the
                following key areas and stakeholders:
              </p>
              <ul>
                <li>Stacey Engle - Chief Executive Officer</li>
                <li>Bill Inman - President</li>
                <li>Dr. Ben Goertzel - Chief AI Advisor</li>
                <li>Neetu Gupta - Chief Development Officer</li>
                <li>Justin Edwards - Vice President of Product</li>
                <li>
                  Jordannah Korus - Vice President of Operations and Customer
                  Success
                </li>
                <li>Narinder Kamra - Chief Information Officer</li>
                <li>Lewis Farrell - Vice President of Marketing</li>
                <li>Mario Alberto Casiraghi - Web3 Advisor</li>
                <li>Sergey Shalyapin - Senior Architect</li>
                <li>
                  Lady Trader Ra - Vice President of Social Media and Community
                  Engagement
                </li>
              </ul>
              <p style={{ padding: "0" }}>
                Economics: The economic model is designed to promote utility and
                value. TWIN tokens can be exchanged for Twin Points,
                facilitating access to premium services and features. This model
                encourages active participation and continuous investment into
                the ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section57;
