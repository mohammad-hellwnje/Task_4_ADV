import React from 'react';
import './DepartmentImage.css';
import imgCardiology from './../../assets/img/departments-1.jpg';
import imgNeurology from './../../assets/img/departments-2.jpg';
import imgHepatology from './../../assets/img/departments-3.jpg';
import imgPediatrics from './../../assets/img/departments-4.jpg';
import imgOphthalmologists from './../../assets/img/departments-5.jpg';

function DepartmentImage({ selectedDepartment }) {
  const departmentImages = {
    Cardiology: imgCardiology,
    Neurology: imgNeurology,
    Hepatology: imgHepatology,
    Pediatrics: imgPediatrics,
    Ophthalmologists: imgOphthalmologists
  };

  return (
    <div className='col-12'>
      <img src={departmentImages[selectedDepartment]} alt="not-found" className='w-100' />
    </div>
  );
}

export default DepartmentImage;
