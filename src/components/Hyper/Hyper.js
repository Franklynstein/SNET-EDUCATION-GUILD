import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section59 from "../Section59/Section59";
import Section60 from "../Section60/Section60";
import Section61 from "../Section61/Section61";
import Section62 from "../Section62/Section62";
import Sidebar from "./Sidebar";

const Hyper = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS HYPERCYCLE?", component: "WHAT IS REJUVE.AI" },
      { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "HOW DOES IT OPERATE?", component: "HOW DOES IT OPERATE" },
      { path: "WHEN WAS HYPERCYCLE ANNOUNCED?", component: "WHEN REJUVEAI ANNOUNCED" },
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
                            {item.component === "WHAT IS REJUVE.AI" && <Section59 />}
                            {item.component === "WHO DISCOVERED IT" && <Section60 />}
                            {item.component === "HOW DOES IT OPERATE" && <Section61 />}
                            {item.component === "WHEN REJUVEAI ANNOUNCED" && <Section60 />}
                            {item.component === "TOKENOMICS" && <Section62 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section59 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section60 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section61 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section60 />}
                        {selectedComponent === "TOKENOMICS" && <Section62 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Hyper;