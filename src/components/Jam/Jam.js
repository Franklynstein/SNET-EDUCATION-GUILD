import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section13 from "../Section13/Section13";
import Section14 from "../Section14/Section14";
import Sidebar from "./Sidebar";

const Jam = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigation = [
        { path: "WHAT IS NUNET?", component: "WHAT IS REJUVE.AI" },
        { path: "WHO IS DISCOVERED?", component: "WHO DISCOVERED IT" },
        { path: "WHEN WAS JAM GALAXY DISCOVERED?", component: "WHO DISCOVERED IT" },
        { path: "TOKENOMICS", component: "HOW DOES IT OPERATE" },
    ];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="container">
            <Sidebar navigation={navigation} setSelectedComponent={setSelectedComponent} />
            <div className="content">
                {isMobile ? (
                    navigation.map((item, index) => (
                        <div key={index} id={item.path.replace(/\s+/g, "")}>
                            {item.component === "WHAT IS REJUVE.AI" && <Section13 />}
                            {item.component === "WHO DISCOVERED IT" && <Section14 />}
                        </div>
                    ))
                ) : (
                    <>
                        {selectedComponent === "WHAT IS REJUVE.AI" && <Section13 />}
                        {selectedComponent === "WHO DISCOVERED IT" && <Section14 />}
                        {selectedComponent === "HOW DOES IT OPERATE" && <Section13 />}
                    </>
                )}
            </div>
        </div>
    );
};

export default Jam;