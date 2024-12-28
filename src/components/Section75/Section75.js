import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section75.css";

function Section75() {
  const [isVisible75, setIsVisible75] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-75-right-content"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible75(true); // Image has entered the viewport
        } else {
          setIsVisible75(false); // Image has left the viewport
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
    <section id="75" className="main-section">
      <div className="items-75">
        <div className="item-75-right">
          <div className="item-75-right-content">
            <div className="item-75-right-content-child">
              <h2 className={isVisible75 ? "slide-in" : "slide-out"}>
                How Rewards Are distributed?
              </h2>
              <h3 className={isVisible75 ? "slide-in" : "slide-out"}>
                Where do Ambassador Program rewards come from?
              </h3>
              <p>
                SingularityNET’s Supervisory Council gives 1/3 of its allocation
                to the Ambassador program. This is currently 48,086 AGIX monthly
                for Q4, 2024. Any unspent budget carries over to the following
                month(s). This is distributed to the WorkGroups according to the
                funding requests they have submitted, in line with their
                quarterly budgets. WorkGroups might reward members directly for
                their work, or create Dework bounties. Workgroup task rewards
                tend to be around $10 to $20 per hour.
              </p>
              <h3 className={isVisible75 ? "slide-in" : "slide-out"}>
                Disbursement of rewards
              </h3>
              <p>
                This is done by Treasury Guild on Tuesdays, using the system
                they developed for reward distribution. You can view the
                dashboard{" "}
              </p>
              <p>
                AGIX (the SingularityNET native token) are sent on the Cardano
                blockchain. To get rewards, you need to provide your public
                Cardano wallet address. You can submit your wallet + Discord
                username in
              </p>
              <h3 className={isVisible75 ? "slide-in" : "slide-out"}>
                To find out more
              </h3>
              <p>
                If you're interested in learning more about how we manage funds,
                attend Treasury Guild meetings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section75;
