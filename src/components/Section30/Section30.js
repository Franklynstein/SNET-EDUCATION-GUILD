import { useEffect, useState } from "react";
import "../main.css";
import "./Section30.css";
import settings from "../assets/img/settings-removebg-preview.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section30() {
  const [isVisible30, setIsVisible30] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-30-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible30(true); // Image has entered the viewport
        } else {
          setIsVisible30(false); // Image has left the viewport
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
    <section id="30" className="main-section">
      <div className="items-30">
        <div className="item-30-left">
          <div
            className={`item-30-left-image ${
              isVisible30 ? "slide-in" : "slide-out"
            }`}
          >
            <img src={settings} alt="" />
          </div>
        </div>
        <div className="item-30-right">
          <div className="item-30-right-content">
            <div className="item-30-right-content-child">
              <h2 className={isVisible30 ? "slide-in" : "slide-out"}>
                How does It Operate?
              </h2>
              <p>
                It’s a decentralized system using AI and smart contracts for
                managing crypto assets. SingularityDAO (SDAO) is the governance
                token for the SingularityDAO platform. Its primary function is
                to enable users to participate in the governance of the platform
                by voting on decisions that shape its future.
              </p>
              <p>
                Additionally, SDAO tokens are used for staking, which allows
                users to earn more SDAO tokens and participate in the platform's
                various features, such as the launchpad, where users can access
                new blockchain and AI projects. The protocol supports various
                products, including DynaSets, staking, yield farming, and a
                launchpad for new projects.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/singularityDAO">SINGULARITYDAO</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/singularityDAO">SINGULARITYDAO</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section30;
