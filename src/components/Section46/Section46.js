import { useEffect, useState } from "react";
import "../main.css";
import "./Section46.css";

function Section46() {
  const [isVisible46, setIsVisible46] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-46-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible46(true); // Image has entered the viewport
        } else {
          setIsVisible46(false); // Image has left the viewport
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
    <section id="46" className="main-section">
      <div className="items-46">
        <div className="item-46-left">
          <div
            className={`item-46-left-image ${
              isVisible46 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-46-right">
          <div className="item-46-right-content">
            <div className="item-46-right-content-child">
              <h2 className={isVisible46 ? "slide-in" : "slide-out"}>
                How Does it Operate
              </h2>
              <p>Ambassadors operate in 4 ways namely:</p>
              <p>
                Structure and Framework: The program is decentralized, allowing
                participants to actively shape its direction and operations.
              </p>
              <p>
                Community Activities: Ambassadors participate in various
                activities, such as translating content, creating multimedia,
                moderating social platforms, and hosting podcasts and meetups.
              </p>
              <p>
                Workgroups: Two self-organized workgroups currently operate: one
                focuses on foundational development, while the other manages a
                community-led podcast. Additional workgroups form as new needs
                arise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section46;
