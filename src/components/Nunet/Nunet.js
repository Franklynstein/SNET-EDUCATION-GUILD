import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section10 from "../Section10/Section10";
import Section11 from "../Section11/Section11";
import Sidebar from "./Sidebar";

const Nunet = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS NUNET?", component: "WHAT IS REJUVE.AI" },
      { path: "WHo IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "HOW DOES IT OPERATE?", component: "WHO DISCOVERED IT" },
      { path: "WHEN NUNET WAS ANNOUNCED", component: "WHEN REJUVEAI ANNOUNCED" },
      { path: "TOKENOMICS", component: "HOW DOES IT OPERATE" },
      // Add other sections here
    ];

    return (
      <div className="container">
        <Sidebar navigation={navigation} setSelectedComponent={setSelectedComponent} />
        <div className="content">

          {isMobile ? (
                    navigation.map((item, index) => (
                        <div key={index} id={item.path.replace(/\s+/g, "")}>
                            {item.component === "WHAT IS REJUVE.AI" && <Section10 />}
                            {item.component === "WHO DISCOVERED IT" && <Section11 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section10 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section11 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section11 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section11 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Nunet;