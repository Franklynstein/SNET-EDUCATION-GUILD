import { useEffect, useState } from "react";
import "../main.css";
import "./Section55.css";

function Section55() {
  const [isVisible55, setIsVisible55] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-55-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible55(true); // Image has entered the viewport
        } else {
          setIsVisible55(false); // Image has left the viewport
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
    <section id="55" className="main-section">
      <div className="items-55">
        <div className="item-55-left">
          <div
            className={`item-55-left-image ${
              isVisible55 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-55-right">
          <div className="item-55-right-content">
            <div className="item-55-right-content-child">
              <h2 className={isVisible55 ? "slide-in" : "slide-out"}>
                Who is Discovered?
              </h2>
              <p>
                The Twin Protocol leadership team comprises experienced
                professionals driving its operations and development:
              </p>
              <ol>
                <li>Stacey Engle - Chief Executive Officer</li>
                <li>Bill Inman - President</li>
                <li>Dr. Ben Goertzel - Chief AI Advisor</li>
                <li>Neetu Gupta - Chief Development Officer</li>
                <li>Justin Edwards - Vice President of Product</li>
                <li>
                  Jordannah Korus - Vice President of Operations and Customer
                  Success
                </li>
                <li>Narinder Kamra - Chief Information Officer</li>
                <li>Lewis Farrell - Vice President of Marketing</li>
                <li>Mario Alberto Casiraghi - Web3 Advisor</li>
                <li>Sergey Shalyapin - Senior Architect</li>
                <li>
                  Lady Trader Ra - Vice President of Social Media and Community
                  Engagement
                </li>
              </ol>
              <p>
                Each team member brings expertise from diverse domains,
                contributing to the protocol’s focus on innovation and
                customer-centric solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section55;
