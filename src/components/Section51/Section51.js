import { useEffect, useState } from "react";
import "../main.css";
import "./Section51.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section51() {
  const [isVisible51, setIsVisible51] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-51-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible51(true); // Image has entered the viewport
        } else {
          setIsVisible51(false); // Image has left the viewport
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
    <section id="51" className="main-section">
      <div className="items-51">
        <div className="item-51-left">
          <div
            className={`item-51-left-image ${
              isVisible51 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-51-right">
          <div className="item-51-right-content">
            <div className="item-51-right-content-child">
              <h2 className={isVisible51 ? "slide-in" : "slide-out"}>
                How Does it Operate
              </h2>
              <p>
                TrueAGI services include traditional cloud-based hosting,
                centralized or decentralized (optional blockchain-based) hosting
                (via Hyperon’s integration with SingularityNET), and hybrid
                scenarios.
              </p>
              <p>
                These services can leverage existing enterprise software models
                and multimodal data by connecting to AGI-as-a-Service via
                conversational interfaces or APIs. Data can also be accessed
                from multiple sources.
              </p>
              <p>
                TrueAGI will offer hosting, data ingestion (including automated
                meta-data creation from data sets), as well as consulting and
                customized AGI services to businesses. Our artificial
                intelligence (AI) system, Hyperon, is the next generation of our
                existing OpenCog platform, the leading open-source AGI project.
              </p>
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

export default Section51;
