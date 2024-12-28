import { useEffect, useState } from "react";
import "../main.css";
import "./Section5.css";
import width_369_2 from "../assets/img/width-369_2.png";

function Section5() {
  const [isVisible5, setIsVisible5] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-5-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible5(true); // Image has entered the viewport
        } else {
          setIsVisible5(false); // Image has left the viewport
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
    <section id="5" className="main-section">
      <div className="items-5">
        <div className="item-5-left">
          <div
            className={`item-5-left-image ${
              isVisible5 ? "slide-in" : "slide-out"
            }`}
          >
            <img src={width_369_2} alt="Section 5 Illustration" />
          </div>
        </div>
        <div className="item-5-right">
          <div className="item-5-right-content">
            <div className="item-5-right-content-child">
              <h2 className={isVisible5 ? "slide-in" : "slide-out"}>
                When was it founded?
              </h2>
              <p>
                It is a concept founded in 2018. The CEO and CTO were hired in
                <br />
                2021.
              </p>
              <h2 className={isVisible5 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                These tokens unlock exclusive discounts on travel, supplements,
                <br />
                medical tests, longevity therapies, and a wealth of other
                <br />
                benefits! Central to our ecosystem is the utility token, used
                for
                <br />
                transactions and signifying membership in the Rejuve network.
              </p>
              <p>
                Additionally, we utilize two types of NFTs to track intellectual
                <br />
                property and manage data permissions, ensuring every member gets
                <br />a fair share of the benefits. In essence, our tokens
                democratize
                <br />
                longevity research access, recognizing and celebrating our
                collective
                <br />
                efforts and shared vision.
                <br />
                $RJV - Token Launch 2023.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
