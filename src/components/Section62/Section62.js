import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section62.css";

function Section62() {
  const [isVisible62, setIsVisible62] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-62-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible62(true); // Image has entered the viewport
        } else {
          setIsVisible62(false); // Image has left the viewport
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
    <section id="62" className="main-section">
      <div className="items-62">
        <div className="item-62-left">
          <div
            className={`item-62-left-image ${
              isVisible62 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
        <div className="item-62-right">
          <div className="item-62-right-content">
            <div className="item-62-right-content-child">
              <h2 className={isVisible62 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                HyPC —&gt; the native HyperCycle network token • refers to both
                the units of the native token and the actual native token
                Sato-Server, which carries a certain value (power of 2) in HyPC
                units and can contain other value instrument tokens inside it.
              </p>
              <p>
                Token Utility
                <br />
                As a participant in the HyperCycle network, users can:
                <ul>
                  <li>Monetize their computing power</li>
                  <li>
                    Collaborate in AI computations that empower other AI systems
                    (synergistic and cooperative AI)
                  </li>
                  <li>
                    Integrate their own AI into the AGI network for enhanced
                    performance
                  </li>
                </ul>
              </p>
              <p style={{ padding: "0" }}>
                HYPC is the native currency, used to access the network and to
                be able to run agents that power AI applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section62;
