import { useEffect, useState } from "react";
import "../main.css";
import "./Section42.css";

function Section42() {
  const [isVisible42, setIsVisible42] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-42-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible42(true); // Image has entered the viewport
        } else {
          setIsVisible42(false); // Image has left the viewport
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
    <section id="42" className="main-section">
      <div className="items-42">
        <div className="item-42-left">
          <div className="item-42-left-image">
            {/* <img src="../assets/img/unknown.png" alt="Unknown" /> */}
            {/* <video src="../assets/img/SNET WIKI.mp4" /> */}
            {/* <video className="video-bg" autoplay muted loop>
              <source src="../assets/img/SNET_WIKI.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
        <div className="item-42-right">
          <div className="item-42-right-content">
            <div className="item-42-right-content-child">
              <h2 className={isVisible42 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                Mindplex operates with a two-token system designed to encourage
                high-quality content creation and active community
                participation.
              </p>
              <p>
                'MPX Token
                <br />
                The MPX token is the liquid token used for transactions within
                the platform. Users can purchase MPX tokens, which are then used
                for membership, governance, and payments for content or AI
                services. Advertisers also pay for sponsored content with MPX.
                The token's supply is limited, and its demand increases as the
                demand for content grows on the platform, potentially raising
                its value in fiat terms.
              </p>
              <p>
                MPXR Token
                <br />
                On the other hand, MPXR is a non-liquid, soulbound token that
                represents a user's reputation within the community. MPXR cannot
                be bought or sold; it is earned through interactions on the
                platform, such as creating content or voting on existing
                content. The more valuable and meaningful the contributions, the
                more MPXR a user earns. This reputation system encourages users
                to act positively within the community. MPXR also plays a role
                in governance, where users with higher reputations can influence
                decisions, request new content, or vote on existing content.
                <br />
                The two-token system supports Mindplex’s goal of attracting
                users to create great content and help rank the best content
                through a fair, decentralized process. As the platform grows,
                the demand for MPX will increase, driven by the need for content
                and the involvement of high-reputation users. The scarcity of
                reputable reviewers (represented by MPXR) increases the value of
                MPX, creating a dynamic ecosystem where both content creators
                and reviewers are incentivized to contribute meaningfully to the
                platform’s growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section42;
