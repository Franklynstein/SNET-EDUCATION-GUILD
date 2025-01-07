import { useEffect, useState } from "react";
import "../main.css";
import "./Section50.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section50() {
  const [isVisible50, setIsVisible50] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-50-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible50(true); // Image has entered the viewport
        } else {
          setIsVisible50(false); // Image has left the viewport
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
    <section id="50" className="main-section">
      <div className="items-50">
        <div className="item-50-left">
          <div
            className={`item-50-left-image ${
              isVisible50 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-50-right">
          <div className="item-50-right-content">
            <div className="item-50-right-content-child">
              <h2 className={isVisible50 ? "slide-in" : "slide-out"}>
                Who Is Discovered
              </h2>
              <p>
                The TrueAGI team, led by pioneers in Artificial General
                Intelligence (AGI), comprises experts with diverse expertise:
              </p>
              <ol>
                <li>Dr. Ben Goertzel (CEO)</li>
                <li>Dr. Robert Werko (COO)</li>
                <li>Chris Poulin (CTO)</li>
                <li>Dr. Matt Iklé (CAIO)</li>
                <li>Dr. Alexey Potapov (CMO)</li>
                <li>Vitaly Bogdanov (Principal Developer)</li>
                <li>Dr. Nil Geisweiller (Principal Developer)</li>
                <li>Dr. Sergey Shalyapin (Principal AI Researcher)</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/trueagi">TRUEAGI</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/trueagi">TRUEAGI</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section50;
