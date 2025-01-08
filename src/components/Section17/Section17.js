import { useEffect, useState } from "react";
import "../main.css";
import "./Section17.css";
import width_768_2 from "../assets/img/width-768_2.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section17() {
  const [isVisible17, setIsVisible17] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-17-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible17(true); // Image has entered the viewport
        } else {
          setIsVisible17(false); // Image has left the viewport
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
    <section id="17" className="main-section">
      <div className="items-17">
        <div className="item-17-left">
          <div
            className={`item-17-left-image ${
              isVisible17 ? "slide-in" : "slide-out"
            }`}
          >
            <img src={width_768_2} alt="Project Development" />{" "}
            {/* Using the imported image */}
          </div>
        </div>
        <div className="item-17-right">
          <div className="item-17-right-content">
            <div className="item-17-right-content-child">
              <h2 className={isVisible17 ? "slide-in" : "slide-out"}>
                When was it founded?
              </h2>
              <p>
                The OpenCog project itself was founded in 2008, via a grant from
                <br />
                the Singularity Institute for Al.
                <br />
                The Hyperon initiative has been introduced through a series of
                <br />
                papers published since 2021.
              </p>
              <h2 className={isVisible17 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                OpenCog Hyperon's main strengths are Radical Scalability and
                <br />
                New Codebase, Unified Representation of Cognitive Algorithms,
                <br />
                Multidisciplinary Cognitive Theory, Atomspace Metagraph, Real-
                <br />
                time and Distributed Cognitive Processing, MeTTa Programming
                <br />
                Language, Efficiency and Versatility in AGI Processes.
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
          <a href="/cogito">COGITO</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section17;
