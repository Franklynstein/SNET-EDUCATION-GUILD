import { useEffect, useState } from "react";
import "../main.css";
import "./Section45.css";

function Section45() {
  const [isVisible45, setIsVisible45] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-45-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible45(true); // Image has entered the viewport
        } else {
          setIsVisible45(false); // Image has left the viewport
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
    <section id="45" className="main-section">
      <div className="items-45">
        <div className="item-45-left">
          <div
            className={`item-45-left-image ${
              isVisible45 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-45-right">
          <div className="item-45-right-content">
            <div className="item-45-right-content-child">
              <h2 className={isVisible45 ? "slide-in" : "slide-out"}>
                Who Is Discovered
              </h2>
              <p>
                The program is an initiative within the SingularityNET
                ecosystem, which is led by its CEO,
                <br />
                Dr. Ben Goertzel, and supported by the Supervisory Council. It
                is a collaborative effort by
                <br />
                the SingularityNET Foundation and its global community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section45;
