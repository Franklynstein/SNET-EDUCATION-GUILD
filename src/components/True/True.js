import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section49 from "../Section49/Section49";
import Section50 from "../Section50/Section50";
import Section51 from "../Section51/Section51";
import Section52 from "../Section52/Section52";
import Sidebar from "./Sidebar";

const True = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS TRUEAGI?", component: "WHAT IS REJUVE.AI" },
      { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "HOW DOES IT OPERATE?", component: "HOW DOES IT OPERATE" },
      { path: "WHEN WAS TRUEAGI ANNOUNCED?", component: "WHEN REJUVEAI ANNOUNCED" },
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
                            {item.component === "WHAT IS REJUVE.AI" && <Section49 />}
                            {item.component === "WHO DISCOVERED IT" && <Section50 />}
                            {item.component === "HOW DOES IT OPERATE" && <Section51 />}
                            {item.component === "TOKENOMICS" && <Section52 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section49 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section50 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section51 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section50 />}
                        {selectedComponent === "TOKENOMICS" && <Section52 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default True;