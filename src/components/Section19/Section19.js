import { useEffect, useState } from "react";
import "../main.css";
import "./Section19.css";
import width_800_2l from "../assets/img/width-800_2l.png";

function Section19() {
  const [isVisible19, setIsVisible19] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-19-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible19(true); // Image has entered the viewport
        } else {
          setIsVisible19(false); // Image has left the viewport
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
    <section id="19" className="main-section">
      <div className="items-19">
        <div className="item-19-left">
          <div
            className={`item-19-left-image ${
              isVisible19 ? "slide-in" : "slide-out"
            }`}
          >
            <img src={width_800_2l} alt="" /> {/* Using imported image */}
          </div>
        </div>
        <div className="item-19-right">
          <div className="item-19-right-content">
            <div className="item-19-right-content-child">
              <h2 className={isVisible19 ? "slide-in" : "slide-out"}>
                What is Cogito?
              </h2>
              <p>
                Cogito's mission is to bring tokenized traditional assets
                onchain for
                <br />
                increased liquidity, security, and transparency. Led by a team
                of
                <br />
                finance and technology experts, Cogito is well-positioned to
                build the
                <br />
                future of finance onchain.
              </p>
              <h2 className={isVisible19 ? "slide-in" : "slide-out"}>
                Who discovered Cogito?
              </h2>
              <p>
                Cogito's founders include Cloris Chen, who brings a banking
                <br /> background fused with DeFi experience, Norton Wang with
                over a <br />
                decade of blockchain engineering expertise, Kenneth Ng, a
                <br />
                seasoned sales professional, Nejc Znidar, a quant analyst,
                Sandra
                <br />
                Grabowiec, a growth manager, and LC Stroud, a content
                strategist.
                <br />
                They are advised by Janet Adams, COO of Singularity/NET, and Ben
                <br />
                Goertzel, a world-class Al expert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section19;
