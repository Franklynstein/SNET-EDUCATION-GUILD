import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section25 from "../Section25/Section25";
import Section26 from "../Section26/Section26";
import Section27 from "../Section27/Section27";
import Sidebar from "./Sidebar";

const Zarqa = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS Zarqa?", component: "WHAT IS REJUVE.AI" },
      { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "WHEN WAS ZARQA ANNOUNCED?", component: "WHEN REJUVEAI ANNOUNCED" },
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
                            {item.component === "WHAT IS REJUVE.AI" && <Section25 />}
                            {item.component === "WHO DISCOVERED IT" && <Section26 />}
                            {item.component === "TOKENOMICS" && <Section27 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section25 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section26 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section26 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section26 />}
                        {selectedComponent === "TOKENOMICS" && <Section27 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Zarqa;