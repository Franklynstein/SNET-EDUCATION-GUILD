import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "./Eco.css";
import Section4 from "../Section4/Section4";
import Section5 from "../Section5/Section5";
import Sidebar from "./Sidebar";

const Eco = () => {
    const [selectedComponent, setSelectedComponent] = useState("WHAT IS REJUVE.AI");

    const navigation = [
      { path: "WHAT IS REJUVE.AI", component: "WHAT IS REJUVE.AI" },
      { path: "WHO DISCOVERED IT", component: "WHO DISCOVERED IT" },
      { path: "HOW DOES IT OPERATE", component: "HOW DOES IT OPERATE" },
      { path: "WHEN REJUVEAI ANNOUNCED", component: "WHEN REJUVEAI ANNOUNCED" },
      // Add other sections here
    ];

    return (
      <div className="container">
        <Sidebar navigation={navigation} setSelectedComponent={setSelectedComponent} />
        <div className="content">
          {selectedComponent === "WHAT IS REJUVE.AI" && <Section4 />}
          {selectedComponent === "WHO DISCOVERED IT" && <Section5 />}
          {selectedComponent === "HOW DOES IT OPERATE" && <Section5 />}
          {selectedComponent === "WHEN REJUVEAI ANNOUNCED" && <Section5 />}
          {/* Add other sections here */}
        </div>
      </div>
    );
};

export default Eco;