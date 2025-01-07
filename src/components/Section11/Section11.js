import { useState, useEffect } from "react";
import "../main.css";
import "./Section11.css";
import width_800_3 from "../assets/img/width-800_3.png";
import navigatorImage from "../assets/img/navigator-image.png";

function Section11() {
  const [isVisible11, setIsVisible11] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-11-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible11(true); // Image has entered the viewport
        } else {
          setIsVisible11(false); // Image has left the viewport
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
    <section id="11" className="main-section">
      <div className="items-11">
        <div className="item-11-left">
          <div
            className={`item-11-left-image ${
              isVisible11 ? "slide-in" : "slide-out"
            }`}
          >
            <img src={width_800_3} alt="NuNet illustration" />
          </div>
        </div>
        <div className="item-11-right">
          <div className="item-11-right-content">
            <div className="item-11-right-content-child">
              <h2 className={isVisible11 ? "slide-in" : "slide-out"}>
                When was it founded?
              </h2>
              <p>
                A spinoff of SingularityNET Global AI Marketplace, NuNet has
                been
                <br />
                operating since 2017. Private alpha launched in September of
                2021.
              </p>
              <h2 className={isVisible11 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                NTX is a{" "}
                <a
                  href="https://www.canva.com/link?target=https%3A%2F%2Fdocs.nunet.io%2Finfohub%2Ftokenomics%2Fntx-utility-token-overview&amp;design=DAGXyGf1wLo&amp;accessRole=viewer&amp;linkSource=document"
                  // target="_blank"
                  rel="noopener nofollow"
                  className="OYPEnA"
                  style={{
                    fontWeight: "400",
                    fontStyle: "normal",
                    color: "rgb(247, 245, 248)",
                    fontKerning: "none",
                    textDecoration: "underline",
                  }}
                >
                  Utility Token
                </a>{" "}
                with{" "}
                <a
                  href="https://www.canva.com/link?target=https%3A%2F%2Fdocs.nunet.io%2Finfohub%2Ftokenomics%2Fntx-utility-token-overview%2Fnetwork-tokenomics&amp;design=DAGXyGf1wLo&amp;accessRole=viewer&amp;linkSource=document"
                  // target="_blank"
                  rel="noopener nofollow"
                  className="OYPEnA"
                  style={{
                    fontWeight: "400",
                    fontStyle: "normal",
                    color: "rgb(247, 245, 248)",
                    fontKerning: "none",
                    textDecoration: "underline",
                  }}
                >
                  Network Tokenomics
                </a>
                .
              </p>
              <p>
                November 21st, 2021{" "}
                <a
                  href="https://www.canva.com/link?target=https%3A%2F%2Ficodrops.com%2Fnunet&amp;design=DAGXyGf1wLo&amp;accessRole=viewer&amp;linkSource=document"
                  // target="_blank"
                  rel="noopener nofollow"
                  className="OYPEnA"
                  style={{
                    fontWeight: "400",
                    fontStyle: "normal",
                    color: "rgb(247, 245, 248)",
                    fontKerning: "none",
                    textDecoration: "underline",
                  }}
                >
                  ICO
                </a>{" "}
                of 300 million NTX were distributed to
                <br />
                Community supporters and Private investors for $0.02.
                <br />
                NTX has a total supply of 1 billion{" "}
                <a
                  href="https://www.canva.com/link?target=https%3A%2F%2Fdocs.nunet.io%2Finfohub%2Ftokenomics%2Fntx-utility-token-overview%2Fnetwork-tokenomics&amp;design=DAGXyGf1wLo&amp;accessRole=viewer&amp;linkSource=document"
                  // target="_blank"
                  rel="noopener nofollow"
                  className="OYPEnA"
                  style={{
                    fontWeight: "400",
                    fontStyle: "normal",
                    color: "rgb(247, 245, 248)",
                    fontKerning: "none",
                    textDecoration: "underline",
                  }}
                >
                  across two blockchains
                </a>
                : <br />
                63.125% on Ethereum
                <br />
                36.875% on Cardano
              </p>
              <p>
                On December 20th, 2023, with roughly 504 million tokens in
                <br />
                circulation, NTX traded around $0.06, for a market cap of about
                <br />
                $30M.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/nunet">NUNET</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/jam-galaxy">JAM GALAXY</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section11;
