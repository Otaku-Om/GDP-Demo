import React, { useState } from "react";
import "./Styles/FAQ.css";
import ConnectOnWhatsApp from "../../ReusableComponents/ConnectOnWhatsApp";
import NotFound from "./Images/not-found.png";
import Accordion from "../../ReusableComponents/Accordion";
import { AccordionData } from "../../Data/AccordionData";

const FAQ = () => {
  return (
    <div id="Faq" className="FAQ">
      <div className="FAQ-Content">
        <h2>FAQ</h2>
        <p>
          We are Garima Dance Productions, helping
          <br className="LineBreak"></br> all dance enthusiasts to live upto
          their dream
        </p>
      </div>
      <div className="FAQ-Container">
        <div className="FAQ-Accordion">
          {AccordionData.map(({ id, question, answer }) => {
            return <Accordion key={id} title={question} content={answer} />;
          })}
        </div>
        <div className="FAQ-Container-Right">
          <div className="FAQ-Container-Right-Image">
            <img src={NotFound} alt="" />
          </div>
          <p>Can't find what you're looking for?</p>
          <ConnectOnWhatsApp text="Ask us directly" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
