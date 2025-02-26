import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section64 from "../Section64/Section64";
import Section65 from "../Section65/Section65";
import Section66 from "../Section66/Section66";
import Section67 from "../Section67/Section67";
import Sidebar from "./Sidebar";

const Awake = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS AWAKENING HEALTH?", component: "WHAT IS REJUVE.AI" },
      { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "HOW DOES IT OPERATE?", component: "HOW DOES IT OPERATE" },
      { path: "WHEN WAS AWAKENING HEALTH ANNOUNCED?", component: "WHEN REJUVEAI ANNOUNCED" },
      { path: "TOKENOMICS?", component: "TOKENOMICS" },
      // Add other sections here
    ];

    return (
      <div className="container">
        <Sidebar navigation={navigation} setSelectedComponent={setSelectedComponent} />
        <div className="content">

        {isMobile ? (
                    navigation.map((item, index) => (
                        <div key={index} id={item.path.replace(/\s+/g, "")}>
                            {item.component === "WHAT IS REJUVE.AI" && <Section64 />}
                            {item.component === "WHO DISCOVERED IT" && <Section65 />}
                            {item.component === "HOW DOES IT OPERATE" && <Section66 />}
                            {item.component === "WHEN REJUVEAI ANNOUNCED" && <Section65 />}
                            {item.component === "TOKENOMICS" && <Section67 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section64 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section65 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section66 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section65 />}
                        {selectedComponent === "TOKENOMICS" && <Section67 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Awake;