import React, { useEffect, useRef, useState } from "react";
import "./styles/Carousel.css";
import { CarouselReviewData } from "../Data/CarouselReviewData";
import { CarouselData } from "../Data/CarouselData";
import CarouselVideoCard from "./CarouselVideoCard";
import CarouselReviewCard from "./CarouselReviewCard";
import StarRateIcon from "@mui/icons-material/StarRate";

function Carousel({ sliderSelector, firstCard }) {
  const ReviewVideoSliderRef = useRef("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleScrollLeft() {
    const scrollValue = windowWidth < 750 ? 300 : 500;
    ReviewVideoSliderRef.current.scrollLeft -= scrollValue;
  }

  function handleScrollRight() {
    const scrollValue = windowWidth < 750 ? 300 : 500;
    ReviewVideoSliderRef.current.scrollLeft += scrollValue;
  }

  return (
    <div className="Reviews-Container-Video">
      <span className="Prev" onClick={handleScrollLeft}>
        &larr;
      </span>
      <div className="Reviews-Video-Carousel" ref={ReviewVideoSliderRef}>
        {firstCard && 
        (<div className="First-Review-Card">
          <h2 className="First-Review-Card-Title">Google Reviews</h2>
          <span className="First-Review-Card-Rating">5.0</span>
          <div className="First-Review-Card-Stars">
            <StarRateIcon id="First-Star" />
            <StarRateIcon id="First-Star" />
            <StarRateIcon id="First-Star" />
            <StarRateIcon id="First-Star" />
            <StarRateIcon id="First-Star" />
          </div>
          <p className="First-Review-Card-RatingCount">(236)</p>
        </div>)}
        {sliderSelector === "review"
          ? CarouselReviewData.map(
              ({ id, profileImgUrl, name, data, reviewText }) => {
                return (
                  <CarouselReviewCard
                    key={id}
                    profileImg={profileImgUrl}
                    profileName={name}
                    profileData={data}
                    reviewText={reviewText}
                  />
                );
              }
            )
          : CarouselData.map(({ id, imgUrl }) => {
              return <CarouselVideoCard key={id} imgUrl={imgUrl} />;
            })}
      </div>
      <span className="Next" onClick={handleScrollRight}>
        &rarr;
      </span>
    </div>
  );
}

export default Carousel;
