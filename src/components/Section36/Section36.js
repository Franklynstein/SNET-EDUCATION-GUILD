import { useEffect, useState } from "react";
import "../main.css";
import "./Section36.css";

function Section36() {
  const [isVisible36, setIsVisible36] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-36-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible36(true); // Image has entered the viewport
        } else {
          setIsVisible36(false); // Image has left the viewport
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
    <section id="36" className="main-section">
      <div className="items-36">
        <div className="item-36-left">
          <div className="item-36-left-image">
            {/* <img src="../assets/img/unknown.png" alt="Unknown" /> */}
            {/* <video src="../assets/img/SNET WIKI.mp4" /> */}
            {/* <video className="video-bg" autoplay muted loop>
              <source src="../assets/img/SNET_WIKI.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
        <div className="item-36-right">
          <div className="item-36-right-content">
            <div className="item-36-right-content-child">
              <h2 className={isVisible36 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <h3>A. Agix Token</h3>
              <p>
                The AGIX token is a key component of the SingularityNET
                ecosystem, primarily used for transactions, settlements,
                incentives, and governance within the platform. It operates on
                the Ethereum blockchain but is compatible with multiple
                blockchains, including Cardano, Polygon, and Binance Smart
                Chain. This broad compatibility enhances its utility across
                different platforms.
              </p>
              <h3>Key Uses of AGIX:</h3>
              <ol>
                <li>
                  Transactions: AGIX is used for paying for AI services in the
                  SingularityNET marketplace, helping create a global,
                  accessible infrastructure for AI services. It allows efficient
                  interactions between AI agents and users.
                </li>
                <li>
                  Settlements: AGIX simplifies transactions by eliminating the
                  need for AI agents to access the native tokens of different
                  protocols. It supports seamless interactions across multiple
                  contracts, ensuring a smooth experience for developers.
                </li>
                <li>
                  Incentives: AGIX rewards contributors to the network, such as
                  curators in the AI Curation Market, and encourages token
                  holders to stake their tokens, further enhancing network
                  growth and sustainability.
                </li>
                <li>
                  Governance: The SingularityNET ecosystem is governed
                  democratically, with a portion of newly created AGIX tokens
                  directed toward enhancing the network's infrastructure. This
                  ensures the system benefits the community as a whole.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section36;
