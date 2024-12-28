import { useEffect, useState } from "react";
import "../main.css";
import "./Section26.css";
import settings from "../assets/img/settings-removebg-preview.png";

function Section26() {
  const [isVisible26, setIsVisible26] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-26-right-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible26(true); // Image has entered the viewport
        } else {
          setIsVisible26(false); // Image has left the viewport
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
    <section id="26" className="main-section">
      <div className="items-26">
        <div className="item-26-left">
          <div className="item-26-left-content">
            <div className="item-26-left-content-child">
              <h2 className={isVisible26 ? "slide-in" : "slide-out"}>
                What is Zarqa
              </h2>
              <p>
                Zarqa is a neural-symbolic language model that aims to bridge
                the gap between neural networks and symbolic reasoning. It
                combines the strengths of both paradigms, enabling more robust
                and interpretable language understanding and generation. The
                name “Zarqa” is derived from the Arabic word “bridge,”
                reflecting its goal of connecting neural networks and symbolic
                logic.
              </p>
              <h2 className={isVisible26 ? "slide-in" : "slide-out"}>
                Who discovered Zarqa?
              </h2>
              <ul>
                <li>CO - CEO - Janet Adams and Sergey Shalyapin</li>
                <li>CO - CEO - Janet Adams and Sergey Shalyapin</li>
                <li>Chief AI Officer: Alexey Potapov</li>
                <li>Chief Product Officer: Chris Pouli</li>
                <li>Chief Infrastructure Officer: Theo Valich</li>
              </ul>
              <h2 className={isVisible26 ? "slide-in" : "slide-out"}>
                When was Zarqa Announced?
              </h2>
              <p style={{ padding: "20px 2.5rem" }}>
                Zarqa was introduced on 19 April 2023, as a new venture of
                SingularityNET that mobilizes our engineering expertise in
                large-scale neural-symbolic AI-based solutions to create a
                pioneering and advanced next-generation LLM, characterized by
                unwavering technical initiative and leadership. Zarqa was
                launched in Q1 2024.
              </p>
            </div>
          </div>
        </div>
        <div className="item-26-right">
          <div
            className={`item-26-right-image ${
              isVisible26 ? "slide-in" : "slide-out"
            }`}
          >
            <img src={settings} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section26;
