import { useEffect, useState } from "react";
import "../main.css";
import "./Section27.css";

function Section27() {
  const [isVisible27, setIsVisible27] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-27-right-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible27(true); // Image has entered the viewport
        } else {
          setIsVisible27(false); // Image has left the viewport
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
    <section id="27" className="main-section">
      <div className="items-27">
        <div className="item-27-left">
          <div className="item-27-left-content">
            <div className="item-27-left-content-child">
              <h2 className={isVisible27 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                It is not clear whether Zarqa will have its own token. However,
                Zarqa
                <br />
                leverages SingularityNET’s expertise in blockchain systems and
                is
                <br />
                built on SingularityNET’s AI-driven smart contract ecosystem,
                <br />
                suggesting that it may utilize SingularityNET's existing
                tokenomics
                <br />
                model.
              </p>
            </div>
          </div>
        </div>
        <div className="item-27-right">
          <div className="item-27-right-image">
            {/* <img src="../assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section27;
