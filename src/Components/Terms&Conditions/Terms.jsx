/* eslint-disable no-unused-vars */
import React from "react";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import './Style/Terms.css';
import Dailog from "../Home/Components/Dailog";

const Terms = ({ handler, state, setState }) => {
  return (
    <div className="Terms">
      <Section1 />
      <Section2 />
      {state && <Dailog handler={handler} />}
    </div>
  );
};

export default Terms;
