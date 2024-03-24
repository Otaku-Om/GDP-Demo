import React from 'react';
import "./styles/ServiceCard.css";

function ServiceCard({ imgPath, text }) {
  return (
    <div className='Services-Container-Card'>
      <img src={imgPath} alt="" />
      <p>{text}</p>
    </div>
  )
}

export default ServiceCard
