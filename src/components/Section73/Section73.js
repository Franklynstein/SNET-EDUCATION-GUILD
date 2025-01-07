import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section73.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section73() {
  const [isVisible73, setIsVisible73] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-73-right-content"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible73(true); // Image has entered the viewport
        } else {
          setIsVisible73(false); // Image has left the viewport
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
    <section id="73" className="main-section">
      <div className="items-73">
        <div className="item-73-right">
          <div className="item-73-right-content">
            <div className="item-73-right-content-child">
              <h2 className={isVisible73 ? "slide-in" : "slide-out"}>
                Workgroups and Guilds
              </h2>
              <h3 className={isVisible73 ? "slide-in" : "slide-out"}>
                Process Guild 🧩
              </h3>
              <ul>
                <li className="list73">
                  This guild includes members from Knowledge Base Workgroup and
                  Github PBL Workgroup. Process Guild helps to establish
                  processes and prioritize Ambassador Program activities.
                </li>
              </ul>
              <h3 className={isVisible73 ? "slide-in" : "slide-out"}>
                Research and Development Guild 🥚
              </h3>
              <ul>
                <li className="list73">
                  This guild aims to gather builders from the community.
                  Software Engineers, Researchers, Data Scientists, Analysts
                  overall anyone willing to contribute and build products, and
                  solutions to benefit the community.
                </li>
              </ul>
              <h3 className={isVisible73 ? "slide-in" : "slide-out"}>
                Strategy Guild 📜
              </h3>
              <ul>
                <li className="list73">
                  A service guild set up to group to discuss and promote
                  strategies beneficial to other workgroups and guilds towards
                  achieving for the overall Ambassador program’s on a visionary
                  or 10,000 foot level..ecosystem and community, while promoting
                  ethical conduct, honesty, integrity, and growth.
                </li>
              </ul>
              <h3 className={isVisible73 ? "slide-in" : "slide-out"}>
                Translation WorkGroup 📜
              </h3>
              <ul>
                <li className="list73">
                  This group translates SingularityNET ecosystem articles into
                  various languages for the community.
                </li>
              </ul>
              <h3 className={isVisible73 ? "slide-in" : "slide-out"}>
                Treasury Guild 🏦
              </h3>
              <ul>
                <li className="list73">
                  This group is about the Ambassador program rules around
                  budgets, payment of completed tasks and anything related to
                  financial activities.
                </li>
              </ul>
              <h3 className={isVisible73 ? "slide-in" : "slide-out"}>
                Video WorkGroup 📽
              </h3>
              <ul>
                <li className="list73">
                  This group produces videos for the Ambassador program, and
                  manages video content.
                </li>
              </ul>
              <h3 className={isVisible73 ? "slide-in" : "slide-out"}>
                Writers’ WorkGroup ✍
              </h3>
              <ul>
                <li className="list73">
                  A group for those interested in writing text for the
                  Ambassador program. There is a tiered structure for
                  contributions, and you’ll need to pass a skills test to be
                  able to take up Writers’ Group bounties.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/programs-workgroups-2">
            SingularityNet Ambassador Program - Workgroups / guilds
          </a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/programs-faqs">SingularityNet Ambassador Program - FAQs</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section73;
