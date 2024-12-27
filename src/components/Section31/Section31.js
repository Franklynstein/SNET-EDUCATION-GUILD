import { useEffect, useState } from "react";
import "../main.css";
import "./Section31.css";
import SNET_WIKI from "../assets/img/SNET_WIKI.mp4";

function Section31() {
  const [isVisible31, setIsVisible31] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-31-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible31(true); // Image has entered the viewport
        } else {
          setIsVisible31(false); // Image has left the viewport
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
    <section id="31" className="main-section">
      <div className="items-31">
        <div className="item-31-left">
          <div
            className={`item-31-left-image ${
              isVisible31 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <v src="assets/img/width-770.png" alt="" /> */}
            {/* <video src="assets/img/SNET WIKI.mp4"></video> */}
            <video className="video-bg31" autoPlay muted loop>
              <source src={SNET_WIKI} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="item-31-right">
          <div className="item-31-right-content">
            <div className="item-31-right-content-child">
              <h2 className={isVisible31 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                SingularityDAO is governed by the SDAO token, an ERC-20 token
                used for decentralized governance. The token allocation includes
                various rounds such as the Seed, Private, and Community rounds,
                with vesting periods ranging from 20% at TGE to fully unlocked
                tokens in the Public Round. Team and advisor tokens have no
                vesting, while airdrops represent 25% at TGE.
              </p>
              <p>
                Rewards, Foundation, Farming, and Ecosystem tokens have
                different release schedules, with monthly releases and some
                having cliff periods.
              </p>
              <p>
                In terms of governance, SDAO holders participate in
                decision-making by voting on proposals through Snapshot, and the
                platform is working towards full decentralization, with external
                developers contributing to upgrades over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section31;
