import { useEffect, useState } from "react";
import "../main.css";
import "./Section7.css";
import width_369_3 from "../assets/img/width-369_3.png";

function Section7() {
  const [isVisible7, setIsVisible7] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-7-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible7(true); // Image has entered the viewport
        } else {
          setIsVisible7(false); // Image has left the viewport
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
    <section id="7" className="main-section">
      <div className="items-7">
        <div className="item-7-left">
          <div
            className={`item-7-left-image ${
              isVisible7 ? "slide-in" : "slide-out"
            }`}

            // className="item-7-left-image slide-out"
          >
            {console.log(isVisible7)}
            <img src={width_369_3} alt="Rejuve.Bio illustration" />
          </div>
        </div>
        <div className="item-7-right">
          <div className="item-7-right-content">
            <div className="item-7-right-content-child">
              <h2 className={isVisible7 ? "slide-in" : "slide-out"}>
                What is Rejuve.Bio?
              </h2>
              <p>
                Rejuve Biotech is developing an innovative drug discovery
                platform and translational medicine service that combines an
                in-house model organism population with a unique analytical
                platform. The platform combines state-of-the-art machine
                learning and artificial general intelligence methods with a
                continuously updated biomedical knowledge graph integrating
                human and model organism databases.
              </p>
              <p>
                The Rejuve Biotech model of choice is the long-lived Methuselah
                Fly, a type of Drosophila melanogaster (fruit fly), selectively
                bred over hundreds of generations to live up to 5 times longer
                than wild-type flies.
              </p>
              <p>
                We can use the sequencing technology to identify specific
                pathways that contribute to the Methuselah Flies’ longevity and
                then use AI and machine learning tools to integrate that
                information with human health and omics data, allowing us to
                identify common genetic pathways that can be studied in
                real-time using the flies’ relatively short lifespan, shortening
                the drug discovery pipeline, and helping to develop therapeutics
                that will target aging and aging-related disease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section7;
