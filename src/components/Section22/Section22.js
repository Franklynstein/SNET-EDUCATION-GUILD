import { useEffect, useState } from "react";
import "../main.css";
import "./Section22.css";
import width_770 from "../assets/img/width-770.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section22() {
  const [isVisible22, setIsVisible22] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-22-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible22(true); // Image has entered the viewport
        } else {
          setIsVisible22(false); // Image has left the viewport
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
    <section id="22" className="main-section">
      <div className="items-22">
        <div className="item-22-left">
          <div
            className={`item-22-left-image ${
              isVisible22 ? "slide-in" : "slide-out"
            }`}
          >
            <img src={width_770} alt="Sophia Verse" />
          </div>
        </div>
        <div className="item-22-right">
          <div className="item-22-right-content">
            <div className="item-22-right-content-child">
              <h2 className={isVisible22 ? "slide-in" : "slide-out"}>
                What is Sophia Verse?
              </h2>
              <p>
                SophiaVerse is the Web3 metaverse partnership of the Hanson
                <br />
                Robotics and SingularityNet Foundation (SNET) ecosystems to
                bring
                <br />
                renowned Sophia Robot to humanoid sentience.
              </p>
              <h2 className={isVisible22 ? "slide-in" : "slide-out"}>
                Who discovered Sophia Verse?
              </h2>
              <p>
                CEO - Logan Ryan Golema
                <br />
                Founder & Visionary- David Hanson, Dr Ben Goertzel
                <br />
                Crypto Advisor - MARCELLO MARI, MARIO CASIRAGHI
                <br />
                Project Advisor - Jon Grove
                <br />
                Lead Sophia Animator - MENGNA LEI
              </p>
              <h2 className={isVisible22 ? "slide-in" : "slide-out"}>
                When was Sophia verse established?
              </h2>
              <p>
                The inspiration for SophiaVerse comes from Sophia the Robot, a
                <br />
                creation of Hanson Robotics. Born in 2016, Sophia is the most
                <br />
                famous humanoid robot in the world.
                <br />
                The SophiaVerse ecosystem is developed by David Hanson & Ben
                <br />
                Goertzel, in partnership between Hanson Robotics &
                SingularityNET.
                <br />
                SophiaVerse began development in 2021 due to the rapid change
                <br />
                seen in the Web3 metaverse arena.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/sophia-verse">SOPHIA VERSE</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/sophia-verse">SOPHIA VERSE</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section22;
