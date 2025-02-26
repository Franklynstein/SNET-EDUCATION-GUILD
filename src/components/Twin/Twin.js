import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section54 from "../Section54/Section54";
import Section55 from "../Section55/Section55";
import Section56 from "../Section56/Section56";
import Section57 from "../Section57/Section57";
import Sidebar from "./Sidebar";

const Twin = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS TWIN PROTOCOL?", component: "WHAT IS REJUVE.AI" },
      { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "HOW DOES IT OPERATE?", component: "HOW DOES IT OPERATE" },
      { path: "WHEN WAS TWIN PROTOCOL ANNOUNCED?", component: "WHEN REJUVEAI ANNOUNCED" },
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
                            {item.component === "WHAT IS REJUVE.AI" && <Section54 />}
                            {item.component === "WHO DISCOVERED IT" && <Section55 />}
                            {item.component === "HOW DOES IT OPERATE" && <Section56 />}
                            {item.component === "TOKENOMICS" && <Section57 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section54 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section55 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section56 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section55 />}
                        {selectedComponent === "TOKENOMICS" && <Section57 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Twin;