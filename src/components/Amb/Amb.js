import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section44 from "../Section44/Section44";
import Section45 from "../Section45/Section45";
import Section46 from "../Section46/Section46";
import Section47 from "../Section47/Section47";
import Sidebar from "./Sidebar";

const Amb = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS AMBASSADORS?", component: "WHAT IS REJUVE.AI" },
      { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "HOW DOES IT OPERATE?", component: "HOW DOES IT OPERATE" },
      { path: "HOW TO JOIN?", component: "WHEN REJUVEAI ANNOUNCED" },
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
                            {item.component === "WHAT IS REJUVE.AI" && <Section44 />}
                            {item.component === "WHO DISCOVERED IT" && <Section45 />}
                            {item.component === "HOW DOES IT OPERATE" && <Section46 />}
                            {item.component === "WHEN REJUVEAI ANNOUNCED" && <Section45 />}
                            {item.component === "TOKENOMICS" && <Section47 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section44 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section45 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section46 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section45 />}
                        {selectedComponent === "TOKENOMICS" && <Section47 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Amb;