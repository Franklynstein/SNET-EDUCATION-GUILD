import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section39 from "../Section39/Section39";
import Section40 from "../Section40/Section40";
import Section41 from "../Section41/Section41";
import Section42 from "../Section42/Section42";
import Sidebar from "./Sidebar";

const Mindplex = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS MINDPLEX?", component: "WHAT IS REJUVE.AI" },
      { path: "WHEN WAS MINDPLEX ANNOUNCED?", component: "WHEN REJUVEAI ANNOUNCED" },
      { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "HOW DOES IT OPERATE?", component: "HOW DOES IT OPERATE" },
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
                            {item.component === "WHAT IS REJUVE.AI" && <Section39 />}
                            {item.component === "WHO DISCOVERED IT" && <Section40 />}
                            {item.component === "HOW DOES IT OPERATE" && <Section41 />}
                            {item.component === "TOKENOMICS" && <Section42 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section39 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section40 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section41 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section39 />}
                        {selectedComponent === "TOKENOMICS" && <Section42 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Mindplex;