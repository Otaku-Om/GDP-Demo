import React from "react";
import "./Styles/LetsCatchUp.css";
import ConnectOnWhatsApp from "../../ReusableComponents/ConnectOnWhatsApp";
import { Link } from "react-router-dom";
import Form from "../../ReusableComponents/Form";

const LetsCatchUp = () => {
  return (
    <div id="CatchUp" className="LetsCatchUp">
      <div className="LetsCatchUp-Content">
        <h2>
          Lets's
          <br />
          <span className="LetsCatchUp-Content-Highlight">Catch up?</span>
        </h2>
        <p>
          We are Garima Dance Productions, helping{" "}
          <br className="LineBreak"></br>all dance enthusiasts to live upto
          their dream
        </p>
        <ConnectOnWhatsApp text="Connect on whatsapp" />
      </div>
      <Form text="Let us reach you!" classSelector="L" />
    </div>
  );
};

export default LetsCatchUp;
