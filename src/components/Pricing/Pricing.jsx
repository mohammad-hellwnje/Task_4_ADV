import React from 'react';
import './Pricing.css';
import Title from '../Title/Title';
import PricingCard from '../PricingCard/PricingCard';
import {cardData} from './../../Data/PricingData/PricingData'
function Pricing() {


  return (
    <div>
      <Title title="Pricing" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
      <PricingCard cardData={cardData} /> 
    </div>
  );
}

export default Pricing;
