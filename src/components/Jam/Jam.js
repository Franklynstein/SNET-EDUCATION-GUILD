import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section13 from "../Section13/Section13";
import Section14 from "../Section14/Section14";
import Sidebar from "./Sidebar";

const Jam = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");

    const navigation = [
      { path: "WHAT IS NUNET?", component: "WHAT IS REJUVE.AI" },
      { path: "WHo IS DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "WHEN WAS JAM GALAXY DISCOVERED?", component: "WHO DISCOVERED IT" },
      { path: "TOKENOMICS", component: "HOW DOES IT OPERATE" },
      // Add other sections here
    ];

    return (
      <div className="container">
        <Sidebar navigation={navigation} setSelectedComponent={setSelectedComponent} />
        <div className="content">
          {selectedComponent === "WHAT IS REJUVE.AI" && <Section13 />}
          {selectedComponent === "WHO DISCOVERED IT" && <Section14 />}
          {selectedComponent === "HOW DOES IT OPERATE" && <Section13 />}
          {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section14 />}
          {/* Add other sections here */}
        </div>
      </div>
    );
};

export default Jam;