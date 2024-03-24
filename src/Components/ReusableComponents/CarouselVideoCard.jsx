import React, { useRef, useState } from "react";
import "./styles/CarouselVideoCard.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

function CarouselVideoCard({ imgUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="Reviews-Video-Carousel-Card">
      <img src={imgUrl} alt="" />
      {isPlaying ? (
        <PauseCircleIcon id="Video-Button" />
      ) : (
        <PlayArrowIcon id="Video-Button" />
      )}
    </div>
  );
}

export default CarouselVideoCard;
