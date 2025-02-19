import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section7 from "../Section7/Section7";
import Section8 from "../Section8/Section8";
import Sidebar from "./Sidebar";

const Bio = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");

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
          {selectedComponent === "WHAT IS REJUVE.AI" && <Section7 />}
          {selectedComponent === "WHO DISCOVERED IT" && <Section8 />}
          {selectedComponent === "HOW DOES IT OPERATE" && <Section8 />}
          {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section8 />}
          {/* Add other sections here */}
        </div>
      </div>
    );
};

export default Bio;