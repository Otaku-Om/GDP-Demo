import React from "react";
import "./Styles/Reviews.css";
import Carousel from "../../ReusableComponents/Carousel";

const Reviews = () => {
  return (
    <div id="Reviews" className="Reviews">
      <div className="Reviews-Content">
        <h2>❤️ from Clients</h2>
        <p>
          We are Garima Dance Productions, helping
          <br className="LineBreak"></br> all dance enthusiasts to live upto
          their dream
        </p>
      </div>
      <div className="Reviews-Container">
        <Carousel sliderSelector="review" firstCard={true} />
        <Carousel sliderSelector="video" firstCard={false} />
      </div>
    </div>
  );
};

export default Reviews;
