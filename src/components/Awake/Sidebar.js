import React, { useEffect, useState } from "react";
import "./Eco.css";
import Section4 from "../Section4/Section4";
import Section5 from "../Section5/Section5";

const Sidebar = ({ navigation, setSelectedComponent }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sidebar ${isScrolled ? "scrolled" : ""}`}>
      <h3 className="space"></h3>
      <nav>
      {navigation.map((item, index) => (
          <button key={index} onClick={() => setSelectedComponent(item.component)}>
            {item.path}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;