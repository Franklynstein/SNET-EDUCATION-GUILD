import { useEffect, useState } from "react";
import "../main.css";
import "./Section66.css";

function Section66() {
  const [isVisible66, setIsVisible66] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-66-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible66(true); // Image has entered the viewport
        } else {
          setIsVisible66(false); // Image has left the viewport
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
    <section id="66" className="main-section">
      <div className="items-66">
        <div className="item-66-left">
          <div
            className={`item-66-left-image ${
              isVisible66 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-66-right">
          <div className="item-66-right-content">
            <div className="item-66-right-content-child">
              <h2 className={isVisible66 ? "slide-in" : "slide-out"}>
                How Does it Operate
              </h2>
              <p>
                Awakening Health will be implementing the most up-to-date
                OpenCog AI operating system built in-house by Singularity Studio
                on the SingularityNET platform. Humanoid caregiver robots will
                significantly help provide better quality care at a lower cost
                than traditional nursing homes or hospitals.
              </p>
              <p>
                Humanoid Caregiver Robot Functions:
                <ul>
                  <li>
                    Identify – Caregiver Robot will be able to identify the
                    patient’s facial, verbal, and gestures to understand the
                    current medical situation.
                  </li>
                  <li>
                    Alert – Detect an emergency and alert staff immediately.
                  </li>
                  <li>
                    Learn – Reinforcement learning algorithms which will allow
                    them to learn from their interactions with patients and then
                    adjust their behavior accordingly. For example, the robots
                    will remember history and past interactions, and be able to
                    remember shared personal information, for a more
                    conversational interaction.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section66;
