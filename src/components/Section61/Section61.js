import { useEffect, useState } from "react";
import "../main.css";
import "./Section61.css";

function Section61() {
  const [isVisible61, setIsVisible61] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-61-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible61(true); // Image has entered the viewport
        } else {
          setIsVisible61(false); // Image has left the viewport
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
    <section id="61" className="main-section">
      <div className="items-61">
        <div className="item-61-left">
          <div
            className={`item-61-left-image ${
              isVisible61 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-61-right">
          <div className="item-61-right-content">
            <div className="item-61-right-content-child">
              <h2 className={isVisible61 ? "slide-in" : "slide-out"}>
                How Does it Operate
              </h2>
              <p>
                HyperCycle enables the currently siloed and narrow AI landscape
                by facilitating secure and efficient collaboration between AI
                systems within the global AI brain of the public internet. ​
              </p>
              <p>
                Effectively, it is a suite of network connectivity products that
                can increase your current AI revenue by up to 5.3 times in less
                than two years. Additionally, it allows your AI to become
                smarter due to the emergence and access to every available AI,
                with no exceptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section61;
