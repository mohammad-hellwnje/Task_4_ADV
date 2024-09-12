import React from 'react';
import FrquentlyAccordion from '../FrquentlyAccordion/FrquentlyAccordion';
import Title from '../Title/Title';
import './Frquently.css';
import {questions , answers} from './../../Data/AccordionData/AccordionData'
function Frquently() {

  return (
    <div className='fr-bg py-3'>
      <Title title="Frquently Asked Questions" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
      <FrquentlyAccordion questions={questions} answers={answers} />  
    </div>
  );
}

export default Frquently;
