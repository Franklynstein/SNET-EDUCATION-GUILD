import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section69.css";
import arrowGif from "../assets/img/arrow.gif";
import joinUs from "../assets/img/join.gif";

function Section69() {
  const [isVisible69, setIsVisible69] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-69-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible69(true); // Image has entered the viewport
        } else {
          setIsVisible69(false); // Image has left the viewport
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
    <section id="69" className="main-section">
      <div className="items-69">
        <div className="item-69-left">
          <div
            className={`item-69-left-image ${
              isVisible69 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="" /> */}
          </div>
          <div className="join-us">
            <img width={100} height={80} src={joinUs} alt="" />
            <img
              className="arrow-gif"
              width={250}
              height={120}
              src={arrowGif}
              alt=""
            />
          </div>
        </div>
        <div className="item-69-right">
          <div className="item-69-right-content">
            <div className="item-69-right-content-child">
              <h2 className={isVisible69 ? "slide-in" : "slide-out"}>
                How To Join SingularityNET Ambassador Program
              </h2>
              <p>
                The SingularityNET Ambassador Program is unique compared to
                traditional ambassador programs. It is not solely focused on
                promoting SingularityNET but also engages in a variety of
                activities, including strategy, governance, documentation,
                learning, and other collaborative endeavors.
              </p>
              <h2>A Flexible and Inclusive Process</h2>
              <p>
                Becoming a full member of the program is a gradual process that
                allows participants to progress at their own pace. There is no
                rush, and everyone is encouraged to find their rhythm and
                involvement level that suits them best.
              </p>
              <h2>WorkGroups: The Core of the Program</h2>
              <p>
                Most of the program’s activities are carried out within
                WorkGroups. These groups focus on specific areas and are open to
                all ambassadors. You can choose to join one or multiple
                WorkGroups based on your interests and expertise. Participation
                in WorkGroups is the primary way to contribute and engage with
                the program.
              </p>
              <h2>Getting Started</h2>
              <p>
                To begin your journey in the SingularityNET Ambassador Program,
                there are a few simple steps to follow (Go to next page)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section69;
