import { useEffect, useState } from "react";
import "../main.css";
import "./Section10.css";
import width_800_2l from "../assets/img/width-800_2l.png";

function Section10() {
  const [isVisible10, setIsVisible10] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-10-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible10(true); // Image has entered the viewport
        } else {
          setIsVisible10(false); // Image has left the viewport
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
    <section id="10" className="main-section">
      <div className="items-10">
        <div className="item-10-left">
          <div
            className={`item-10-left-image ${
              isVisible10 ? "slide-in" : "slide-out"
            }`}
          >
            <img src={width_800_2l} alt="NuNet illustration" />
          </div>
        </div>
        <div className="item-10-right">
          <div className="item-10-right-content">
            <div className="item-10-right-content-child">
              <h2 className={isVisible10 ? "slide-in" : "slide-out"}>
                What is NuNet?
              </h2>
              <p>
                NuNet provides globally distributed and optimized computing
                power
                <br />
                and storage for decentralized networks.
              </p>
              <h2 className={isVisible10 ? "slide-in" : "slide-out"}>
                Who discovered NuNet?
              </h2>
              <p>
                Chief Executive Officer -{" "}
                <a
                  href="https://www.canva.com/link?target=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fvveitas&amp;design=DAGXyGf1wLo&amp;accessRole=viewer&amp;linkSource=document"
                  rel="noopener nofollow"
                  className="OYPEnA"
                  style={{
                    fontWeight: "400",
                    fontStyle: "normal",
                    color: "rgb(17, 85, 204)",
                    fontKerning: "none",
                    textDecoration: "underline",
                  }}
                >
                  V. Kabir Veitas
                </a>
              </p>
              <h2 className={isVisible10 ? "slide-in" : "slide-out"}>
                How does it work?
              </h2>
              <p>
                NuNet is an ecosystem which intelligently harnesses latent
                <br />
                computing resources of the community into a global network. Its
                <br />
                infrastructure enables optimal positioning of AI processes and
                <br />
                interfaces, and establishes machine-to-machine payment and data
                <br />
                streaming channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section10;
