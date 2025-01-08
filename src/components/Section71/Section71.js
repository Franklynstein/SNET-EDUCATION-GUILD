import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section71.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section71() {
  const [isVisible71, setIsVisible71] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-71-right-content"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible71(true); // Image has entered the viewport
        } else {
          setIsVisible71(false); // Image has left the viewport
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
    <section id="71" className="main-section">
      <div className="items-71">
        <div className="item-71-right">
          <div className="item-71-right-content">
            <div className="item-71-right-content-child">
              <h2 className={isVisible71 ? "slide-in" : "slide-out"}>
                Workgroups and Guilds
              </h2>
              <p className="p71">
                The SingularityNET Ambassador Program consists of 19 Workgroups
                and Guilds, such as:
              </p>
              <h3 className={isVisible71 ? "slide-in" : "slide-out"}>
                African Guild 🌍
              </h3>
              <ul>
                <li className="list71">
                  This Guild is dedicated to expanding the SingularityNet
                  footprint in Africa. Everyone’s welcome - especially if you
                  are from any African community or desire to propagate
                  SingularityNet’s mission within your immediate African
                  community/region.
                </li>
              </ul>
              <h3 className={isVisible71 ? "slide-in" : "slide-out"}>
                AI Ethics WorkGroup 🧾
              </h3>
              <ul>
                <li className="list71">
                  The AI Ethics Workgroup is working alongside an initiative
                  from the SingularityNET Foundation (see Global Ethics
                  Initiative{" "}
                  <a
                    href="https://www.canva.com/link?target=https%3A%2F%2Fshorturl.at%2FcPDfn&amp;design=DAGXyGf1wLo&amp;accessRole=viewer&amp;linkSource=document"
                    target="_blank"
                    draggable="false"
                    rel="noopener nofollow noreferrer"
                  >
                    (https://shorturl.at/cPDfn)
                  </a>{" "}
                  to research ordinary people’s views about the ethics that
                  should govern the use of AI. Everyone’s welcome to join the
                  workgroup - especially if you have, or would like to learn,
                  skills in community research.
                </li>
              </ul>
              <h3 className={isVisible71 ? "slide-in" : "slide-out"}>
                AI Sandbox/Think Tank WorkGroup 🧪
              </h3>
              <ul>
                <li className="list71">
                  The AI Sandbox is envisioned as a dynamic environment where
                  individuals can openly and safely showcase, experiment with,
                  and refine their AI tool sets without the pressure of any
                  formal settings.
                </li>
              </ul>
              <h3 className={isVisible71 ? "slide-in" : "slide-out"}>
                Archives WorkGroup 📑
              </h3>
              <ul>
                <li className="list71">
                  This group maintains a record of Ambassador Program meetings,
                  and explores how we can use LLMs (Large Language Models) to
                  make records searchable.
                </li>
              </ul>
              <h3 className={isVisible71 ? "slide-in" : "slide-out"}>
                Education Guild 📚
              </h3>
              <ul>
                <li className="list71">
                  In the process of educating about all things related to AI,
                  AGI & ASI education for the SNET community.
                </li>
              </ul>
              <h3 className={isVisible71 ? "slide-in" : "slide-out"}>
                Gamers Guild 🎮
              </h3>
              <ul>
                <li className="list71">
                  This guild helps to educate and onboard community members
                  through gamification, conduct gaming sessions for community
                  members, and covers gamified projects launched by SNET through
                  educational workshops.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/programs-getting-started">
            SingularityNet Ambassador Program - WorkGroups / Guilds
          </a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/programs-workgroups-2">
            SingularityNet Ambassador Program - Workgroups / guilds
          </a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section71;
