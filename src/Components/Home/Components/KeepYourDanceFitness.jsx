import React, { useRef, useState } from "react";
import "./Styles/KeepYourDanceFitness.css";
import Video from "../Video/home-video.mp4";
import DanceImg from "./Images/home.jpg";
import ConnectOnWhatsApp from "../../ReusableComponents/ConnectOnWhatsApp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const KeepYourDanceFitness = () => {
  const [mute, setMuted] = useState(true);
  const MainVideoRef = useRef(null);

  const handleToggleMute = () => {
    if (MainVideoRef.current) {
      console.log(MainVideoRef.current.muted);
      MainVideoRef.current.muted = !MainVideoRef.current.muted;
      setMuted(MainVideoRef.current.muted);
      console.log(MainVideoRef.current.muted);
    }
  };

  return (
    <div id="Fitness" className="KeepYourFitness">
      <div className="KeepYourFitness-Video">
        <video ref={MainVideoRef} autoPlay muted={mute} loop={true}>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {mute ? (
          <VolumeOffIcon onClick={handleToggleMute} id="Mute-Icon" />
        ) : (
          <VolumeUpIcon onClick={handleToggleMute} id="Mute-Icon" />
        )}
      </div>
      <div className="KeepYourFitness-Content">
        <div className="KeepYourFitness-Content-Left">
          <h1>
            Keep up your fitness <br className="NextLine" />
            through{" "}
            <span className="KeepYourFitness-Content-Left-Highlight">
              Dance
            </span>
          </h1>
          <ConnectOnWhatsApp text="Connect on whatsapp" />
        </div>
        <p className="KeepYourFitness-Content-Right">
          We are Garima Dance Productions, helping all dance enthusiasts to live
          upto their dream
        </p>
      </div>
    </div>
  );
};

export default KeepYourDanceFitness;
