import { useEffect, useState } from "react";
import "../main.css";
import "./Section34.css";

function Section34() {
  const [isVisible34, setIsVisible34] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-34-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible34(true); // Image has entered the viewport
        } else {
          setIsVisible34(false); // Image has left the viewport
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
    <section id="34" className="main-section">
      <div className="items-34">
        <div className="item-34-left">
          <div
            className={`item-34-left-image ${
              isVisible34 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-34-right">
          <div className="item-34-right-content">
            <div className="item-34-right-content-child">
              <h2 className={isVisible34 ? "slide-in" : "slide-out"}>
                Who is Discovered?
              </h2>
              <p>
                SingularityNET was co-founded by Dr. Ben Goertzel, who serves as
                the CEO and Chief Scientist. Alongside him is Dr. David Hanson,
                the co-founder. The executive team includes various leaders,
                such as:
              </p>
              <ul>
                <li>Janet Adams (Chief Operating Officer)</li>
                <li>Mario Casiraghi (Head of Crypto Operations)</li>
                <li>Dr. Matt Ikle (Chief Science Officer)</li>
                <li>Jan Horlings (Chief Product Officer)</li>
                <li>Sergey Shalyapin (Chief Technology Officer)</li>
                <li>Dr. Alexey Potapov (Chief AGI Officer)</li>
                <li>Dr. Mihaela Ulieru (Chief AI Alchemist)</li>
                <li>Alex Blagirev (Strategic Initiatives Officer)</li>
                <li>Loic Claveau (Chief Marketing Officer)</li>
              </ul>
              <p>
                The Foundation Board includes Dr. Ben Goertzel, Cassio
                Pennachin, David Lake, and Ugo Di Leva. The Supervisory Council
                includes advisors such as David Orban (Managing Advisor) and
                Penny Wong.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section34;
