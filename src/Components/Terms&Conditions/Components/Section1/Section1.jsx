import React from "react";
import "./Style/Section1.css";
import { useNavigate } from "react-router-dom";
const Section1 = () => {
  const History = useNavigate();

  const handleHome = () => {
    History("/");
  };
  return (
    <>
      <div className="s1_terms_container">
        <div className="s1_terms_heading">
          <h1 className="s1_terms_h1">
            <span className="s1_terms_span">TERMS</span> & CONDITIONS
          </h1>
          <span className="s1_terms_main">
            <span onClick={handleHome} className="s1_terms_home">
              HOME
            </span>{" "}
            &gt; <span className="s1_terms_homes">TERMS & CONDITIONS</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Section1;
