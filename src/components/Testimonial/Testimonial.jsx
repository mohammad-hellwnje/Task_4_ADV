import React from 'react';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';
import Title from '../Title/Title';
import './Testimonial.css';
import {testimonials} from './../../Data/TestimonialData/TestimonialData'

function Testimonial() {


  return (
    <div className='container'>
      <Title title="Testimonial" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
      <TestimonialSlider testimonials={testimonials} /> 
    </div>
  );
}

export default Testimonial;
