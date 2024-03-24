import React, { useState } from "react";
import "./styles/Accordion.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="FAQ-Accordion-Item">
      <div
        className="FAQ-Accordion-Title"
        onClick={() => setIsActive(!isActive)}
      >
        <h3>{title}</h3>
        <div>{isActive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</div>
      </div>
      <div className={`FAQ-Accordion-Content ${isActive ? "Show" : ""}`}>
        {content}
      </div>
    </div>
  );
}

export default Accordion;
