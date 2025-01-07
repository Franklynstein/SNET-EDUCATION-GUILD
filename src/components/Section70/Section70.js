import { useEffect, useState } from "react";
import "../main.css";
import "./Section70.css";
import pointerGif from "../assets/img/pointer.gif";

import navigatorImage from "../assets/img/navigator-image.png";

function Section70() {
  const [isVisible70, setIsVisible70] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-70-right"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible70(true); // Image has entered the viewport
        } else {
          setIsVisible70(false); // Image has left the viewport
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
    <section id="70" className="main-section">
      <div className="items-70">
        <h2 className={isVisible70 ? "slide-in" : "slide-out"}>
          Getting Started To Join SingularityNET Ambassador Program
        </h2>
        <div className="item-70-row-group">
          <div className="item-70-left">
            <div className="item-70-left-content">
              <div className="item-70-left-content-child">
                <h3 className={isVisible70 ? "slide-in" : "slide-out"}>
                  Join us on Discord
                </h3>
                <p>
                  Join our Discord server to connect with the community. Explore
                  channels for WorkGroups and #ambassador-general for general
                  discussions. Jump into any conversation that interest
                </p>
                <h3 className={isVisible70 ? "slide-in" : "slide-out"}>
                  Create a Wallet and Join Dework
                </h3>
                <p>
                  Submit a Cardano - based wallet address (Eternl, Nami, or
                  Yoroi) to receive task rewards. Complete the form here. Then,
                  sign up on Dework using your Discord name to track tasks and
                  contributions.
                </p>
                <h3 className={isVisible70 ? "slide-in" : "slide-out"}>
                  Get the Ambassador Program Google Calendar
                </h3>
                <p>
                  Stay updated on WorkGroup meetings by adding the Ambassador
                  Program calendar to your personal calendar. Access meeting
                  times and Zoom links directly. Join us on Zoom, every Tuesday
                  at 18:00 UTC, for Ambassador Town Hall - the main weekly
                  get-together for anyone interested in the Ambassador program.
                  You'll find the Zoom link in{" "}
                  <a
                    href="https://www.canva.com/link?target=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fembed%3Fsrc%3Dsingularitynetambassadors%2540gmail.com&amp;design=DAGXyGf1wLo&amp;accessRole=viewer&amp;linkSource=document"
                    target="_blank"
                    draggable="false"
                    rel="noopener nofollow noreferrer"
                  >
                    our Calendar
                  </a>
                </p>
                <h3 className={isVisible70 ? "slide-in" : "slide-out"}>
                  Get Involved with WorkGroups
                </h3>
                <p>
                  WorkGroups are where the magic happens! Contribute to
                  activities like video creation or governance. Attend meetings
                  to find the right fit for you. Share feedback anonymously
                  using this form.
                </p>
              </div>
            </div>
          </div>
          <div className="item-70-right">
            <div className="youtube-video-link70">
              <iframe
                src="https://canva-embed.com/api/iframe?app=1&url=https%3A%2F%2Fdiscord.com%2Finvite%2Fsnet&key=462812a26b593f2dbfbfcbb14f6d699a"
                title="discord"
                style={{ border: "none" }}
              ></iframe>
            </div>
            <img src={pointerGif} alt="" />
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/programs-join">
            SingularityNet Ambassador Program - Getting Started To Join
          </a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/programs-workshop">
            SingularityNet Ambassador Program - Workgroups / guilds
          </a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section70;
