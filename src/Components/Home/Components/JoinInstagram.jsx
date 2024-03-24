import React from "react";
import "./Styles/JoinInstagram.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { JoinInstaData } from "../../Data/JoinInstaData";

const JoinInstagram = () => {
  const handleInstagramClick = () => {
    const username = "GarimadanceProductions";
    const instagramUrl = `https://www.instagram.com/${username}`;
    window.open(instagramUrl, "_blank");
  };
  return (
    <div id="Gallery" className="JoinInstagram">
      <div className="JoinInstagram-Content">
        <h2>
          Join us
          <br />
          on <span className="JoinInstagram-Content-Highlight">Instagram</span>
        </h2>
        <Link id="JoinInstagram-Content-Button" onClick={handleInstagramClick}>
          <InstagramIcon id="Insta-Icon" />
          <span className="JoinInstagram-Content-Button-Text">
            @GarimadanceProductions
          </span>
        </Link>
      </div>
      <div className="JoinInstagram-Container">
        {JoinInstaData.map(({ id, imgUrl }) => {
          return (
            <div key={id} className="JoinInstagram-Container-Card">
              <img src={imgUrl} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JoinInstagram;
