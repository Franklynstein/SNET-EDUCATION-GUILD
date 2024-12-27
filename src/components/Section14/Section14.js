import { useEffect, useState } from "react";
import "../main.css";
import "./Section14.css";
import width800Image from "../assets/img/width-800_4.png";

function Section14() {
  const [isVisible14, setIsVisible14] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-14-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible14(true); // Image has entered the viewport
        } else {
          setIsVisible14(false); // Image has left the viewport
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
    <section id="14" className="main-section">
      <div className="items-14">
        <div className="item-14-left">
          <div className="item-14-left-image">
            <img src={width800Image} alt="" />
          </div>
        </div>
        <div className="item-14-right">
          <div className="item-14-right-content">
            <div className="item-14-right-content-child">
              <h2 className={isVisible14 ? "slide-in" : "slide-out"}>
                When was it founded?
              </h2>
              <p>
                The project has been in development since 2019, with the team
                working on building the necessary infrastructure, AI models, and
                blockchain integration. They assembled a talented team,
                showcased the potential of AI-generated music at conferences
                like AGI-22 in August 2022, and are pursuing building the
                platform and its "galactic jamverse".
              </p>
              <h2 className={isVisible14 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                The traditional music industry is often criticized for: <br />
                Opaque income structures and unfair compensation: Artists
                receive limited royalties while intermediaries and major labels
                control a huge share of profits. <br />
                Limited artist-fan connection: The relationship between artists
                and their fans remains mediated by labels and marketing
                channels, not based on direct interaction. <br />
                Creativity constrained by conventional expectations: Commercial
                pressures and predicted formulas. <br />
                Therefore, by cutting out the middlemen, artists have
                unprecedented control over their music, their pricing, and how
                they engage with fans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section14;
