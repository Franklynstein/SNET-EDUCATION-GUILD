import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section19 from "../Section19/Section19";
import Section20 from "../Section20/Section20";
import Sidebar from "./Sidebar";

const Cogito = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS COGITO?", component: "WHAT IS REJUVE.AI" },
      { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "HOW DOES IT OPERATE?", component: "HOW DOES IT OPERATE" },
      { path: "WHEN WAS COGITO ANNOUNCED?", component: "WHEN REJUVEAI ANNOUNCED" },
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
                            {item.component === "WHAT IS REJUVE.AI" && <Section19 />}
                            {item.component === "WHO DISCOVERED IT" && <Section20 />}
                            {item.component === "HOW DOES IT OPERATE" && <Section19 />}
                            {item.component === "WHEN REJUVEAI ANNOUNCED" && <Section20 />}
                            {item.component === "TOKENOMICS" && <Section19 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section19 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section20 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section19 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section20 />}
                        {selectedComponent === "TOKENOMICS" && <Section19 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Cogito;