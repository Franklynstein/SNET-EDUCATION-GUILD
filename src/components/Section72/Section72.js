import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section72.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section72() {
  const [isVisible72, setIsVisible72] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-72-right-content"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible72(true); // Image has entered the viewport
        } else {
          setIsVisible72(false); // Image has left the viewport
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
    <section id="72" className="main-section">
      <div className="items-72">
        <div className="item-72-right">
          <div className="item-72-right-content">
            <div className="item-72-right-content-child">
              <h2 className={isVisible72 ? "slide-in" : "slide-out"}>
                Workgroups and Guilds
              </h2>
              <h3 className={isVisible72 ? "slide-in" : "slide-out"}>
                GitHub PBL WorkGroup ✨
              </h3>
              <ul>
                <li className="list72">
                  Creating project-based learning materials about Github on the
                  Andamio platform, in collaboration with Gimbalabs and Swarm
                  Governance Guild.
                </li>
              </ul>
              <h3 className={isVisible72 ? "slide-in" : "slide-out"}>
                Governance WorkGroup 💡
              </h3>
              <ul>
                <li className="list72">
                  This group discusses governance issues for the Ambassador
                  program, such as how we make decisions, how we reward
                  contribution, how we decentralize, and how we ensure
                  inclusion.
                </li>
              </ul>
              <h3 className={isVisible72 ? "slide-in" : "slide-out"}>
                Knowledge Base WorkGroup 🧩
              </h3>
              <ul>
                <li className="list72">
                  Organizing and creating an Ambassador Program knowledge base.
                  Knowledge base workgroup Builds and organizes a program
                  knowledge base.
                </li>
              </ul>
              <h3 className={isVisible72 ? "slide-in" : "slide-out"}>
                LatAM Guild 🌎
              </h3>
              <ul>
                <li className="list72">
                  The LATAM Ambassadors Guild is a community-driven initiative
                  dedicated to expanding SingularityNET's footprint in Latin
                  America. We are committed to help grow SingularityNET’s
                  mission and vision of decentralizing upcoming AGI with the
                  warm support of the Global Ambassadors Program in our dear
                  South-American continent. Join us and be part of the
                  Decentralized AGI Revolution in LATAM!
                </li>
              </ul>
              <h3 className={isVisible72 ? "slide-in" : "slide-out"}>
                Marketing Guild 📣
              </h3>
              <ul>
                <li className="list72">
                  Members of the marketing guild are working on Ambassador
                  program media and outreach. Related workgroups are Writers,
                  Video and Translation workgroups.
                </li>
              </ul>
              <h3 className={isVisible72 ? "slide-in" : "slide-out"}>
                Onboarding WorkGroup 🎢
              </h3>
              <ul>
                <li className="list72">
                  We work on how to onboard new people into the Ambassador
                  program. Everyone’s welcome - especially if you have, or would
                  like to learn, skills in community engagement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/programs-workgroups">
            SingularityNet Ambassador Program - WorkGroups / Guilds
          </a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/programs-workgroups-3">
            SingularityNet Ambassador Program - Workgroups / guilds
          </a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section72;
