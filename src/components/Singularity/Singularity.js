import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section29 from "../Section29/Section29";
import Section30 from "../Section30/Section30";
import Section31 from "../Section31/Section31";
import Sidebar from "./Sidebar";

const Singularity = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS SINGULARITYDAO?", component: "WHAT IS REJUVE.AI" },
      { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "HOW DOES IT OPERATE?", component: "HOW DOES IT OPERATE" },
      { path: "WHEN WAS SINGULARITYDAO ANNOUNCED?", component: "WHEN REJUVEAI ANNOUNCED" },
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
                            {item.component === "WHAT IS REJUVE.AI" && <Section29 />}
                            {item.component === "WHO DISCOVERED IT" && <Section30 />}
                            {item.component === "HOW DOES IT OPERATE" && <Section29 />}
                            {item.component === "WHEN REJUVEAI ANNOUNCED" && <Section30 />}
                            {item.component === "TOKENOMICS" && <Section31 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section29 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section30 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section29 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section30 />}
                        {selectedComponent === "TOKENOMICS" && <Section31 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Singularity;