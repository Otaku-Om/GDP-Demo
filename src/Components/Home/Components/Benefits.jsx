import React from 'react';
import "./Styles/Benefits.css";
import BenefitCard from '../../ReusableComponents/BenefitCard';
import { BenefitData } from '../../Data/BenefitData';


const Benefits = () => {
  return (
    <div className='Benefits'>
      <h2 className="Benefits-Heading">Benefits you'll get</h2>
      <div className="Benefits-Container">
        {BenefitData.map(({ id, icon, text }) =>{
          return (
            <BenefitCard
            key={id}
            icon={icon}
            text={text}
          />
          ) 
        })}
      </div>
    </div>
  )
}

export default Benefits