import { useEffect, useState } from "react";
import "../main.css";
import "./Section29.css";

function Section29() {
  const [isVisible29, setIsVisible29] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-29-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible29(true); // Image has entered the viewport
        } else {
          setIsVisible29(false); // Image has left the viewport
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
    <section id="29" className="main-section">
      <div className="items-29">
        <div className="item-29-left">
          <div
            className={`item-29-left-image ${
              isVisible29 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
        <div className="item-29-right">
          <div className="item-29-right-content">
            <div className="item-29-right-content-child">
              <h2 className={isVisible29 ? "slide-in" : "slide-out"}>
                What is SingularityDAO
              </h2>
              <p>
                SingularityDAO is a decentralized platform that makes it easy
                and safe to manage crypto assets. It uses AI-powered tools to
                offer smart, automated trading strategies. The platform connects
                digital asset managers with users, providing tools for managing
                assets and boosting innovation in the crypto space. It’s
                community-driven, encouraging feedback and open communication to
                grow and improve.
              </p>
              <h2 className={isVisible29 ? "slide-in" : "slide-out"}>
                Who discovered SingularityDAO?
              </h2>
              <p style={{ padding: "20px" }}>
                SingularityDAO is led by Macello Mari, who serves as CEO and co-
                founder, along with Dr. Ben Goertzel, Co-Founder and CEO of
                SingularityNET. The initial foundation for this project was set
                by them.
              </p>
              <h2 className={isVisible29 ? "slide-in" : "slide-out"}>
                When was SingularityDAO Announced?
              </h2>
              <p style={{ padding: "20px 2.5rem" }}>
                SingularityDAO was officially introduced on April 28, 2021.
                SingularityDAO was announced in November 2020 through a blog
                post by Dr. Ben Goertzel, the CEO of SingularityNET.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section29;
