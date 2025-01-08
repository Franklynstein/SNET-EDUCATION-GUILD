import { useEffect, useState } from "react";
import "../main.css";
import "./Section60.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section60() {
  const [isVisible60, setIsVisible60] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-60-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible60(true); // Image has entered the viewport
        } else {
          setIsVisible60(false); // Image has left the viewport
        }
      });
    };

    // Intersection Observer options
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the viewport
      threshold: 0.5, // Trigger when 60% of the image is in view
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
    <section id="60" className="main-section">
      <div className="items-60">
        <div className="item-60-left">
          <div
            className={`item-60-left-image ${
              isVisible60 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-60-right">
          <div className="item-60-right-content">
            <div className="item-60-right-content-child">
              <h2 className={isVisible60 ? "slide-in" : "slide-out"}>
                Who Is Discovered
              </h2>
              <p>
                HyperCycle led by TODA’s co-founder : Toufi Saliba and
                SingularityNET’s CEO Dr. Ben Goertzel.
                <br />
                HyperCycle core team, there are : Robert Moir PhD, Dann Toliver,
                Greg Colvin PhD, Ernie Casilla, Ibby Benali, and Barry Rowe PhD
                and some others.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/hypercycle">HYPERCYCLE</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/hypercycle">HYPERCYCLE</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section60;
