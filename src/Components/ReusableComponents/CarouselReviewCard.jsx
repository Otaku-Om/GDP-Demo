import React from "react";
import "./styles/CarouselReviewCard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarRateIcon from "@mui/icons-material/StarRate";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

function CarouselReviewCard({
  profileImg,
  profileName,
  profileData,
  reviewText,
}) {
  return (
    <div className="Reviews-Text-Carousel-Card">
      <div className="Profile">
        <div className="Profile-Content">
          <div className="Profile-Image">
            <img src={profileImg} alt="" />
          </div>
          <div className="Profile-Name">
            <h3>{profileName}</h3>
            <p>{profileData}</p>
          </div>
        </div>
        <MoreVertIcon id="Dot-Menu" />
      </div>
      <div className="Rating">
        <div className="Rating-Container">
          <StarRateIcon id="Star" />
          <StarRateIcon id="Star" />
          <StarRateIcon id="Star" />
          <StarRateIcon id="Star" />
          <StarRateIcon id="Star" />
        </div>
        <p>a month ago</p>
      </div>
      <div className="Review-Text">
        <p>{reviewText}</p>
      </div>
      <div className="Review-Icons">
        <ThumbUpOffAltIcon id="Review-Icon-Thumb" />
        <OpenInBrowserIcon id="Review-Icon-Browser" />
      </div>
    </div>
  );
}

export default CarouselReviewCard;
