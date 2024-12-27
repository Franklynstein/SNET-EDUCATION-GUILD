import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section74.css";

function Section74() {
  const [isVisible74, setIsVisible74] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-74-right-content"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible74(true); // Image has entered the viewport
        } else {
          setIsVisible74(false); // Image has left the viewport
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
    <section id="74" className="main-section">
      <div className="items-74">
        <div className="item-74-right">
          <div className="item-74-right-content">
            <div className="item-74-right-content-child">
              <h2 className={isVisible74 ? "slide-in" : "slide-out"}>FAQ</h2>
              <ul>
                <li>Q: How do I become a Core Contributor?</li>
                <li>
                  A: Getting involved with WorkGroups and Guilds is how you work
                  towards becoming a Core Contributor.
                </li>
              </ul>
              <ul>
                <li>Q: How long does it take to become a Core Contributor?</li>
                <li>
                  A: There is an expectation that new members engage in
                  different workgroups for several months before being
                  considered for the Core Contributor role.
                </li>
              </ul>
              <ul>
                <li>Q: What kinds of tasks can I get involved with?</li>
                <li>
                  A: You can find various tasks on Dework - they include things
                  like making videos, facilitation, documenting etc. You can
                  also start a new workgroup if you have ideas for how to
                  improve the Ambassador Program.
                </li>
              </ul>
              <ul>
                <li>Q: How can I find a task?</li>
                <li>
                  A: It varies from workgroup to workgroup. Most of the time
                  tasks are assigned in the meeting or through discussions in
                  the Discord channels. To learn about how to apply for Dework
                  tasks, see{" "}
                  <a
                    href="https://www.canva.com/link?target=https%3A%2F%2Fyoutu.be%2FuCtXpnPQnaA&amp;design=DAGXyGf1wLo&amp;accessRole=viewer&amp;linkSource=document"
                    draggable="false"
                    rel="noopener nofollow"
                    class="OYPEnA"
                    style={{
                      fontWeight: 300,
                      fontStyle: "normal",
                      color: "rgb(247, 245, 248)",
                      fontKerning: "none",
                      textDecoration: "underline",
                    }}
                  >
                    this video.
                  </a>
                  Some Workgroups provide bounties that you can apply for on
                  Dework.
                </li>
              </ul>
              <ul>
                <li>Q: Which wallet to use?</li>
                <li>
                  A: It is advisable to use Cardano native wallets like Eternl,
                  Nami, Typhon wallets, etc rather than using the likes of Trust
                  wallet or Metamask. Also, with a wallet like Eternl, users can
                  create an address book of recipients and up to 24 accounts
                  from the exact mnemonic phrase. If you need help with how to
                  create a wallet,{" "}
                  <a
                    href="https://www.canva.com/link?target=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1t4kGaNOLLkI-xwJyg32s_OrR4ojV3ODI1xmiUbxaQG0%2Fedit%3Fusp%3Dsharing&amp;design=DAGXyGf1wLo&amp;accessRole=viewer&amp;linkSource=document"
                    target="_blank"
                    draggable="false"
                    rel="noopener nofollow noreferrer"
                  >
                    see our guide here.
                  </a>
                </li>
              </ul>
              <ul>
                <li>Q: How do I get rewarded?</li>
                <li>
                  A: Once you submit a completed task, it will be reviewed and
                  audited before being paid out in AGIX. You will be rewarded
                  for completing tasks each week on Tuesdays. Kindly submit a
                  Cardano wallet address by filling{" "}
                </li>
              </ul>
              <ul>
                <li>Q: What are MINS?</li>
                <li>
                  A. The MINS tokens are created by Singularity Net Treasury
                  Guild to track the minutes allocated to each task on Dework
                  and capturing the minutes on chain by sending these MINS
                  tokens out with every reward distribution.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section74;
