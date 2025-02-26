import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section22 from "../Section22/Section22";
import Section23 from "../Section23/Section23";
import Sidebar from "./Sidebar";

const Sophia = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS SOPHIA VERSE?", component: "WHAT IS REJUVE.AI" },
      { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "WHY SOPHIA VERSE?", component: "HOW DOES IT OPERATE" },
      { path: "WHEN WAS SOPHIA VERSE ANNOUNCED?", component: "WHEN REJUVEAI ANNOUNCED" },
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
                            {item.component === "WHAT IS REJUVE.AI" && <Section22 />}
                            {item.component === "WHO DISCOVERED IT" && <Section23 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section22 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section23 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section22 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section23 />}
                        {selectedComponent === "TOKENOMICS" && <Section22 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Sophia;