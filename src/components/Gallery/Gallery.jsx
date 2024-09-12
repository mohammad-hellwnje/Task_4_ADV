import React from 'react';
import './Gallery.css';
import Title from '../Title/Title';
import GallerySlider from '../GallerySlider/GallerySlider';
import {images} from './../../Data/GalleryData/GalleryData'

function Gallery() {

 

  return (
    <div>
      <Title title="Gallery" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
      <GallerySlider images={images} />  
    </div>
  );
}

export default Gallery;
