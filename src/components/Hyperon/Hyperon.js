import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section16 from "../Section16/Section16";
import Section17 from "../Section17/Section17";
import Sidebar from "./Sidebar";

const Hyperon = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS OPENCOG HYPERON", component: "WHAT IS REJUVE.AI" },
      { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "WHEN WAS OPENCOG HYPERON DISCOVERED", component: "WHEN REJUVEAI ANNOUNCED" },
      { path: "TOKENOMICS", component: "WHEN REJUVEAI ANNOUNCED" },
      // Add other sections here
    ];

    return (
      <div className="container">
        <Sidebar navigation={navigation} setSelectedComponent={setSelectedComponent} />
        <div className="content">

        {isMobile ? (
                    navigation.map((item, index) => (
                        <div key={index} id={item.path.replace(/\s+/g, "")}>
                            {item.component === "WHAT IS REJUVE.AI" && <Section16 />}
                            {item.component === "WHO DISCOVERED IT" && <Section17 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section16 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section16 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section16 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section17 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Hyperon;