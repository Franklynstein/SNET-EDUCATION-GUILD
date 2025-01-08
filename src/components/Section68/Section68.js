import { useEffect, useState } from "react";
import "../main.css";
import "./Section68.css";
import dialogBox from "../assets/img/dialog.png";
import arrowGif from "../assets/img/arrow.gif";
import welcomePng from "../assets/img/welcome.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section68() {
  const [isVisible68, setIsVisible68] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-68-right-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible68(true); // Image has entered the viewport
        } else {
          setIsVisible68(false); // Image has left the viewport
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
    <section id="68" className="main-section">
      <div className="items-68">
        <div className="item-68-row-group">
          <div className="item-68-left">
            <div className="item-68-left-content">
              <div className="item-68-left-content-child">
                <h2 className={isVisible68 ? "slide-in" : "slide-out"}>
                  SingularityNET Ambassador Program
                </h2>
                <p>
                  The SingularityNET Ambassador Program is dedicated to building
                  public awareness of decentralized AI/AGI and the
                  SingularityNET ecosystem. It provides structure and rewards to
                  community members who contribute toward a beneficial AGI.
                </p>
                <h2 className={isVisible68 ? "slide-in" : "slide-out"}>
                  The SingularityNET Ecosystem
                </h2>
                <p>
                  To find out more about the wider SingularityNET ecosystem,
                  visit. You can also read this{" "}
                  <a
                    href="https://www.canva.com/link?target=https%3A%2F%2Fmedium.com%2Fsingularitynet%2Fthe-path-to-agi-singularitynet-ecosystem-cooperation-159fcedf63c7&amp;design=DAGXyGf1wLo&amp;accessRole=viewer&amp;linkSource=document"
                    draggable="false"
                    rel="noopener nofollow"
                  >
                    blog post.
                  </a>
                </p>
                <h2>Core Values</h2>
                <p>
                  The core values of our Ambassador Program are:
                  <ul>
                    <li>Transparency</li>
                    <li>Decentralization</li>
                    <li>Involvement</li>
                  </ul>
                  Community members are fully involved in decision-making,
                  including decisions on how tokens are spent. We achieve this
                  through our weekly Town Hall meetings, which are open to all,
                  and various other experiments in contribution-based,
                  decentralized decision-making. Together, we can work towards
                  creating a world where AGI benefits all of humanity.
                </p>
              </div>
            </div>
          </div>
          <div className="item-68-right">
            <div
              className={`item-68-right-image ${
                isVisible68 ? "slide-in" : "slide-out"
              }`}
            ></div>
            <img src={dialogBox} alt="" />
            <p className="dialog-box-content">
              I’m Netron,
              <br />
              SingularityNET's
              <br />
              ambassador program
              <br />
              mascot
            </p>
          </div>
        </div>
        <div className="below-ads">
          <p>Watch This Video to LEARN Our Ambassador program</p>
          <div className="arrow-gif-container">
            <img src={arrowGif} alt="" />
          </div>
          <div className="youtube-video-link68">
            <iframe
              src="https://www.youtube.com/embed/Wg9y98gxlCU"
              title="youtube"
              style={{ border: "none" }}
            ></iframe>
          </div>
          <div className="welcome-style">
            <img width={120} height={90} src={welcomePng} alt="" />
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/awakening-health">AWAKENING HEALTH</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/programs-join">
            SingularityNet Ambassador Program - How to join program
          </a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section68;
