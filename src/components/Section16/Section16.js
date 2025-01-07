import { useEffect, useState } from "react";
import "../main.css";
import "./Section16.css";
import width_768 from "../assets/img/width-768.png"; // Example for importing another image

import navigatorImage from "../assets/img/navigator-image.png";

function Section16() {
  const [isVisible16, setIsVisible16] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-16-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible16(true); // Image has entered the viewport
        } else {
          setIsVisible16(false); // Image has left the viewport
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
    <section id="16" className="main-section">
      <div className="items-16">
        <div className="item-16-left">
          <div
            className={`item-16-left-image ${
              isVisible16 ? "slide-in" : "slide-out"
            }`}
          >
            <img src={width_768} alt="NuNet" />{" "}
            {/* Updated to use imported image */}
          </div>
        </div>
        <div className="item-16-right">
          <div className="item-16-right-content">
            <div className="item-16-right-content-child">
              <h2 className={isVisible16 ? "slide-in" : "slide-out"}>
                What is OpenCog Hyperon?
              </h2>
              <p>
                OpenCog Hyperon is an advanced artificial general intelligence
                <br />
                (AGI) platform. It leverages a new codebase and
                <br />
                multidisciplinary cognitive theories to achieve cognitive
                synergy,
                <br />
                and utilizes the Atomspace Metagraph and MeTTa programming
                <br />
                language for flexible, efficient, and real-time cognitive
                <br />
                processing.
              </p>

              <h2 className={isVisible16 ? "slide-in" : "slide-out"}>
                Who discovered OpenCog Hyperon?
              </h2>
              <p>
                An Al project started by SingularityNet led by the following
                <br />
                Dr. Ben Goertzel, Dr. Alexey Potapov, Dr. Matt Ikle, Dr. Nil
                <br />
                Geisweiller, Hedra Yusuf, Andre Senna, Vitaly Bogdanov,...
              </p>
              <h2 className={isVisible16 ? "slide-in" : "slide-out"}>
                How does it work?
              </h2>
              <p>
                NuNet is an ecosystem that intelligently harnesses latent
                computing resources from the community into a global network.
                Its infrastructure enables optimal positioning of AI processes
                and interfaces, and establishes machine-to-machine payment and
                data streaming channels.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/hyperon">OPENCOG HYPERON</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/hyperon">OPENCOG HYPERON</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section16;
