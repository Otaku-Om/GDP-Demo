import React from 'react';
import "./Styles/Services.css";
import { ServiceData } from "../../Data/ServiceData";
import ServiceCard from '../../ReusableComponents/ServiceCard';

const Services = () => {
  return (
    <div id='Services' className='Services'>
      <h2 className='Services-Heading'>Services</h2>
      <div className="Services-Container">
        {ServiceData.map(({ id, imgPath, text }) =>{
          return (
            <ServiceCard
            key={id}
            imgPath={imgPath}
            text={text}
          />
          )  
        })}
      </div>
    </div>
  )
}

export default Services