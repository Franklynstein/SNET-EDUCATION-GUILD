import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section33 from "../Section33/Section33";
import Section34 from "../Section34/Section34";
import Section35 from "../Section35/Section35";
import Section36 from "../Section36/Section36";
import Section37 from "../Section37/Section37";
import Sidebar from "./Sidebar";

const Snet = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
      { path: "WHAT IS SINGULARITYNET?", component: "WHAT IS REJUVE.AI" },
      { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "HOW DOES IT OPERATE?", component: "HOW DOES IT OPERATE" },
      { path: "WHEN WAS SINGULARITYNET ANNOUNCED?", component: "WHEN REJUVEAI ANNOUNCED" },
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
                            {item.component === "WHAT IS REJUVE.AI" && <Section33 />}
                            {item.component === "WHO DISCOVERED IT" && <Section34 />}
                            {item.component === "HOW DOES IT OPERATE" && <Section35 />}
                            {item.component === "WHEN REJUVEAI ANNOUNCED" && <Section36 />}
                            {item.component === "TOKENOMICS" && <Section37 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section33 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section34 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section35 />}
                        {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section36 />}
                        {selectedComponent === "TOKENOMICS" && <Section37 />}
                    </>
                )}
        </div>
      </div>
    );
};

export default Snet;