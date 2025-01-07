import { useEffect, useState } from "react";
import "../main.css";
import "./Section33.css";
import width224 from "../assets/img/width-224.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section33() {
  const [isVisible33, setIsVisible33] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-33-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible33(true); // Image has entered the viewport
        } else {
          setIsVisible33(false); // Image has left the viewport
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
    <section id="33" className="main-section">
      <div className="items-33">
        <div className="item-33-left">
          <div className="item-33-left-image">
            <img src={width224} alt="SingularityNET" />
            {/* <video src="../assets/img/SNET_WIKI.mp4"></video> */}
            {/* <video className="video-bg" autoplay muted loop>
              <source src="../assets/img/SNET_WIKI.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
        <div className="item-33-right">
          <div className="item-33-right-content">
            <div className="item-33-right-content-child">
              <h2 className={isVisible33 ? "slide-in" : "slide-out"}>
                What is SingularityNET
              </h2>
              <p>
                SingularityNET is a decentralized, blockchain-based platform for
                artificial intelligence (AI). It allows anyone to create, share,
                and monetize AI services through a globally accessible AI
                marketplace. SingularityNET aims to establish itself as the
                knowledge layer of the internet and to lay the groundwork for
                the future development of advanced general intelligence (AGI).
              </p>
              <p>
                Rewards, Foundation, Farming, and Ecosystem tokens have
                different release schedules, with monthly releases and some
                having cliff periods.
              </p>
              <h2 className={isVisible33 ? "slide-in" : "slide-out"}>
                When was SingularityNET Announced?
              </h2>
              <p>
                SingularityNET was first introduced in October 2017 as a
                decentralized AI marketplace to enable AI agents to monetize AI
                services at scale.
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

export default Section33;
