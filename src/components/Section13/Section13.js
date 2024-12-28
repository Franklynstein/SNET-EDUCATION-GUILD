import { useEffect, useState } from "react";
import "../main.css";
import "./Section13.css";
import swirlGif from "../assets/img/swirl.gif";

function Section13() {
  const [isVisible13, setIsVisible13] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-13-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible13(true); // Image has entered the viewport
        } else {
          setIsVisible13(false); // Image has left the viewport
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
    <section id="13" className="main-section">
      <div className="items-13">
        <div className="item-13-left">
          <div
            className={`item-13-left-image ${
              isVisible13 ? "slide-in" : "slide-out"
            }`}
          >
            <img src={swirlGif} alt="Swirl animation" />
          </div>
        </div>
        <div className="item-13-right">
          <div className="item-13-right-content">
            <div className="item-13-right-content-child">
              <h2 className={isVisible13 ? "slide-in" : "slide-out"}>
                What is Jam Galaxy?
              </h2>
              <p>
                Jam Galaxy is an AI-driven tokenomics music platform that aims
                to transform the global music industry by creating a
                decentralized ecosystem for musicians, producers, fans, and
                other music communities. Artists can create and distribute their
                music and interact with their fan and musician communities free
                from distributors and other intermediaries.
              </p>
              <p>
                The Jam Galaxy platform will give artists more control over
                their trajectory by promoting closer collaboration and
                interaction with their fans and like-minded artists to benefit
                artists and fans who love their music.
              </p>
              <h2 className={isVisible13 ? "slide-in" : "slide-out"}>
                Who discovered Jam Galaxy?
              </h2>
              <p>
                Jam Galaxy is led by Patrik Gudev (CEO of Jam Galaxy), Ben
                Goertzel (CEO and founder of SingularityNet), Matt Zimak (COO),
                Tony Mann (CTO), Dianee Krouse (President and Artist Relations).
              </p>
              <p>
                Jamularity Band Members: Desdemona The Robot (Desi), SOPHIA The
                Robot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section13;
