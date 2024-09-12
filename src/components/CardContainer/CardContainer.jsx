import React from 'react';
import Cards from '../Cards/Cards';
import './CardContainer.css';
import Content from '../Content/Content';
import { cardsData ,contentData } from './../../Data/CardsData/CardsData';

function CardContainer() {

  return (
    <div>
      <Cards cardsData={cardsData} />
      <Content 
        title={contentData.title} 
        description={contentData.description} 
        buttonText={contentData.buttonText}
      />
    </div>
  );
}

export default CardContainer;
