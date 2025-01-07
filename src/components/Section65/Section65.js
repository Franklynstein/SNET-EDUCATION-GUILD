import { useEffect, useState } from "react";
import "../main.css";
import "./Section65.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section65() {
  const [isVisible65, setIsVisible65] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-65-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible65(true); // Image has entered the viewport
        } else {
          setIsVisible65(false); // Image has left the viewport
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
    <section id="65" className="main-section">
      <div className="items-65">
        <div className="item-65-left">
          <div
            className={`item-65-left-image ${
              isVisible65 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-65-right">
          <div className="item-65-right-content">
            <div className="item-65-right-content-child">
              <h2 className={isVisible65 ? "slide-in" : "slide-out"}>
                Who is Discovered?
              </h2>
              <p>
                AI and Robotics experts from SingularityNET Studio and Hanson
                Robotics spearhead AHL Led by CEO Alex Yang, Dr. Ben Goertzel,
                CEO of SingularityNET, developed the AI, while Dr. David Hanson
                led by CEO of Hanson Robotics, created emotionally expressive
                technologies.
              </p>
              <p>
                Awakening Health merges AI and robotics experts from Singularity
                Studio and Hanson Robotics.
              </p>
              <p>
                However , Awakenin Health merges with Forest Hills Labs, focused
                on regenerative medicine and medical aesthetics to birth the new
                Awakening Health and further revolutionise the health care
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/awakening-health">AWAKENING HEALTH</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/awakening-health">AWAKENING HEALTH</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section65;
