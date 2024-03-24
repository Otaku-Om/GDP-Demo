import React, { useEffect, useRef, useState } from 'react';
import "./Styles/GalleryCard.css";
import FilterIcon from '@mui/icons-material/Filter';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';

function GalleryCard({ image, contentType }) {
  const VideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    scrollTo(0, 0);
  }, [])

  const handlePlay = () => {
    if(isPlaying) {
      VideoRef.current.pause();
      setIsPlaying(false);
    } else {
      VideoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
   <div className="Gallery-Container-Card">
      {contentType === "image" ? <FilterIcon id="Card-Icon" /> : (isPlaying ? <PauseCircleOutlineOutlinedIcon id="cardVideo-Icon" onClick={handlePlay} /> : <PlayCircleOutlineIcon id="cardVideo-Icon" onClick={handlePlay} /> )  }
      {contentType === "image" ? <img src={image} alt="" /> : <video onEnded={() => setIsPlaying(false)} ref={VideoRef} autoPlay muted><source src={image} type='video/mp4' /></video> } 
   </div>
  )
}

export default GalleryCard;
