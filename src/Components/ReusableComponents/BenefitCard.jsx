import React from 'react';
import "./styles/BenefitCard.css";
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

function BenefitCard({ icon, text }) {

   const renderIcon = (icon) => {

      switch (icon) {
        case 'online':
          return <MobileFriendlyIcon id="Benefits-Icon" />
        case 'affordable':
          return <CurrencyRupeeIcon id="Benefits-Icon" />;
        case 'schedule':
          return <AlarmOnIcon id="Benefits-Icon"/>;
        default:
          return null;
      }
    }

  return (
    <div className='Benefits-Container-Card'>
      {renderIcon(icon)}
      <span className='Benefits-Card-Text'>{text}</span>
    </div>
  )
}

export default BenefitCard
