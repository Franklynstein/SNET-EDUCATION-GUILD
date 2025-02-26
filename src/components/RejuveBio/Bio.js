import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section7 from "../Section7/Section7";
import Section8 from "../Section8/Section8";
import Sidebar from "./Sidebar";

const Bio = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "What is Rejuve.BIO", component: "WHAT IS REJUVE.AI" },
      { path: "WHO DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "TOKENOMICS", component: "HOW DOES IT OPERATE" },
      { path: "MISC", component: "WHEN REJUVEAI ANNOUNCED" },
      // Add other sections here
    ];

    return (
      <div className="container">
        <Sidebar navigation={navigation} setSelectedComponent={setSelectedComponent} />
        <div className="content">

        {isMobile ? (
                    navigation.map((item, index) => (
                        <div key={index} id={item.path.replace(/\s+/g, "")}>
                            {item.component === "WHAT IS REJUVE.AI" && <Section7 />}
                            {item.component === "WHO DISCOVERED IT" && <Section8 />}
                            {item.component === "HOW DOES IT OPERATE" && <Section8 />}
                            {item.component === "WHEN REJUVEAI ANNOUNCED" && <Section7 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section7 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section8 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section8 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section7 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Bio;