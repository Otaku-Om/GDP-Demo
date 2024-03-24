/* eslint-disable no-unused-vars */
import React from "react";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import './Style/Privacy.css';
import Dailog from "../Home/Components/Dailog";

const Return = ({ handler, state, setState }) => {
  return (
    <div className="Privacy">
      <Section1 />
      <Section2 />
      {state && <Dailog handler={handler} />}
    </div>
  );
};

export default Return;
