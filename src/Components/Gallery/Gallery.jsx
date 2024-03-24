import React from "react";
import "./Styles/Gallery.css";
import ConnectOnWhatsApp from "../ReusableComponents/ConnectOnWhatsApp";
import GalleryData from "../Data/GalleryData";
import GalleryCard from "./Components/GalleryCard";
import Dailog from "../Home/Components/Dailog";

function Gallery({ handler, state, setState }) {
  return (
    <div className="Gallery">
      <h1 className="Gallery-Heading">
        Welcome to <br />
        <span className="Gallery-Highlight">GDP</span>
      </h1>
      <div className="Gallery-Container">
        {GalleryData &&
          GalleryData.gallery_data1.map((card, index) => {
            return (
              <GalleryCard
                key={`${index}z`}
                image={card.img_url}
                contentType={card.content_type}
              />
            );
          })}

        <h2 className="Gallery-Container-Heading">
          {GalleryData.gallery_heading1}
        </h2>
        {GalleryData &&
          GalleryData.gallery_data2.map((card, index) => {
            return (
              <GalleryCard
                key={`${index}y`}
                image={card.img_url}
                contentType={card.content_type}
              />
            );
          })}

        <h2 className="Gallery-Container-Heading">
          {GalleryData.gallery_heading2}
        </h2>
        {GalleryData &&
          GalleryData.gallery_data3.map((card, index) => {
            return (
              <GalleryCard
                key={`${index}x`}
                image={card.img_url}
                contentType={card.content_type}
              />
            );
          })}
      </div>
      <div className="Gallery-Join">
        <h2 className="Gallery-SubHeading">Wanna join our troop?</h2>
        <ConnectOnWhatsApp text="Connect on whatsapp" />
      </div>
      {state && <Dailog handler={handler} />}
    </div>
  );
}

export default Gallery;
