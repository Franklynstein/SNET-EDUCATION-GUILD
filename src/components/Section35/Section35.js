import { useEffect, useState } from "react";
import "../main.css";
import "./Section35.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section35() {
  const [isVisible35, setIsVisible35] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-35-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible35(true); // Image has entered the viewport
        } else {
          setIsVisible35(false); // Image has left the viewport
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
    <section id="35" className="main-section">
      <div className="items-35">
        <div className="item-35-left">
          <div
            className={`item-35-left-image ${
              isVisible35 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-35-right">
          <div className="item-35-right-content">
            <div className="item-35-right-content-child">
              <h2 className={isVisible35 ? "slide-in" : "slide-out"}>
                How Does It Operate?
              </h2>
              <p>
                SingularityNET operates as a decentralized AI platform where
                developers can create and share AI services. Its core
                technologies include OpenCog Hyperon, for AGI development, and
                AI-DSL, a tool to simplify AI service creation. The platform
                runs on NuNet, a distributed computing network, and Hypercycle,
                which optimizes blockchain interactions. <br />
                SingularityNET also partners with Cardano to improve
                decentralization and scalability. These technologies work
                together to support a growing ecosystem of AI services, with
                spin-off projects driving adoption in various industries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/singularityNET">SINGULARITYNET</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/singularityNET">SINGULARITYNET</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section35;
