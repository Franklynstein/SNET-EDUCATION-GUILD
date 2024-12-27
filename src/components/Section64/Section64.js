import { useEffect, useState } from "react";
import "../main.css";
import "./Section64.css";

function Section64() {
  const [isVisible64, setIsVisible64] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-64-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible64(true); // Image has entered the viewport
        } else {
          setIsVisible64(false); // Image has left the viewport
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
    <section id="64" className="main-section">
      <div className="items-64">
        <div className="item-64-left">
          <div
            className={`item-64-left-image ${
              isVisible64 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="Shield" /> */}
          </div>
        </div>
        <div className="item-64-right">
          <div className="item-64-right-content">
            <div className="item-64-right-content-child">
              <h2 className={isVisible64 ? "slide-in" : "slide-out"}>
                What is Awakening Health
              </h2>
              <p>
                Awakening Health is a joint venture between Hanson Robotics and
                Singularity Studio with the vision of fusing biomedical
                knowledge, AI, and robotics to drive the massive advent of
                healthcare robots transforming the medical arena.
              </p>
              <p>
                Awakening Health will be producing its first AI-powered
                character robot, named Grace, to engage eldercare patients
                naturally and emotionally – providing a variety of benefits
                including cognitive stimulation, intuitive communication, and
                secure gathering and management of patient data for use in
                advanced machine learning and next-gen medicine.
              </p>
              <h2 className={isVisible64 ? "slide-in" : "slide-out"}>
                When Awakening Health Announced
              </h2>
              <p>
                Awakening Health main offering is a humanoid medical robot
                assistant designed to support medical professionals and patients
                in elderly care facilities, hospitals, and clinics. It was
                founded in 2020 and is based in Wanchai, Hong Kong. In October
                2023, Awakening Health Lab merged with Forest Hills Lab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section64;
