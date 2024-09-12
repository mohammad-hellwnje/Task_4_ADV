import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faBrain, faLungs, faTooth } from '@fortawesome/free-solid-svg-icons';  
import './Cards.css';

function Cards({ cardsData }) {  
  const iconMap = {
    faHeartPulse: faHeartPulse,
    faBrain: faBrain,
    faLungs: faLungs,
    faTooth: faTooth
  };

  return (
    <div className="container my-5">
      <div className="row g-4">
        {cardsData.map((card, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12">
            <div className="d-flex flex-column align-items-start px-3 py-5 box-shadow">
              <FontAwesomeIcon icon={iconMap[card.icon]} size="3x" className="mb-3 main-color" />  
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
