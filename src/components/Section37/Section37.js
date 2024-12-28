import { useEffect, useState } from "react";
import "../main.css";
import "./Section37.css";

function Section37() {
  const [isVisible37, setIsVisible37] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-37-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible37(true); // Image has entered the viewport
        } else {
          setIsVisible37(false); // Image has left the viewport
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
    <section id="37" className="main-section">
      <div className="items-37">
        <div className="item-37-left">
          <div className="item-37-left-image">
            {/* <img src="../assets/img/unknown.png" alt="Unknown" /> */}
            {/* <video src="../assets/img/SNET WIKI.mp4" /> */}
            {/* <video className="video-bg" autoplay muted loop>
              <source src="../assets/img/SNET_WIKI.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
        <div className="item-37-right">
          <div className="item-37-right-content">
            <div className="item-37-right-content-child">
              <h2 className={isVisible37 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p style={{ padding: "20px 0 0" }}>AGIX Staking</p>
              <p>
                Staking AGIX tokens helps support the marketplace while earning
                rewards. This staking mechanism contributes to the liquidity
                pool, which is essential for the Fiat-Crypto Gateway. The
                Fiat-Crypto Gateway allows users to purchase AI services with
                fiat currencies like PayPal, while the underlying transactions
                still use AGIX tokens. This ensures the platform remains
                economically sound while offering flexibility to users.
              </p>
              <p>
                The Fiat-Crypto Gateway is set to fully launch in two phases:
                the first phase allows for fiat-to-AGIX conversion, and the
                second phase will enable the conversion of AGIX tokens earned by
                service providers into fiat.
                <br />
                By staking their tokens, users help maintain liquidity and
                facilitate the platform's functioning, earning additional AGIX
                tokens as rewards.
              </p>
              <p>B. ASI Token</p>
              <p>
                The AGIX was the initial utility token. However, the merger with
                Fetch and <br />
                Ocean Protocol which happened in July, 2024 saw the introduction
                of the Artificial <br />
                Super Intelligence Token as the new token for transactions
                within the ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section37;
