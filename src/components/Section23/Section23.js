import { useEffect, useState } from "react";
import "../main.css";
import "./Section23.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section23() {
  const [isVisible23, setIsVisible23] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-23-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible23(true); // Image has entered the viewport
        } else {
          setIsVisible23(false); // Image has left the viewport
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
    <section id="23" className="main-section">
      <div className="items-23">
        <div className="item-23-left">
          <div className="item-23-left-image">
            {/* <img src="assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
        <div className="item-23-right">
          <div className="item-23-right-content">
            <div className="item-23-right-content-child">
              <h2 className={isVisible23 ? "slide-in" : "slide-out"}>
                Why Sophia Verse?
              </h2>
              <ul id="list23">
                <li>
                  <p>
                    Advancement of Artificial General Intelligence (AGI):
                    SophiaVerse was created to contribute to the advancement of
                    AGI, particularly in the context or sophia Robot, one of the
                    world's most renowned humanoid robots.
                  </p>
                </li>
                <li>
                  <p>
                    Web3 Metaverse Development: The project aims to thrive in
                    the rapidly evolving Web3 metaverse arena, emphasizing the
                    development of a decentralized Web3 infrastructure and the
                    creation of its metaverse.
                  </p>
                </li>
                <li>
                  <p>
                    Compassionate sentience: SophiaVerse has the unique goal or
                    bringing a machine (Sophia Robot) to compassionate
                    sentience. This involves imbuing the Sophia with a form of
                    intelligence that is not only advanced but also capable of
                    understanding and expressing compassion.
                  </p>
                </li>
              </ul>

              <h2 className={isVisible23 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                $Soph and $Guard token governance -- via Smart Al Contracts
                --allows for a hive mind where humans and Al's participate in
                the intelligence of Sophia
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
          <a href="/zarqa">ZARQA</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section23;
