import React from 'react';
import Title from '../Title/Title';
import DoctorCard from '../DoctorCards/DoctorCard';
import {doctors} from './../../Data/DoctorData/DoctorData'

function Doctor() {
 


  return (
    <div>
      <Title title="Doctors" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
      <DoctorCard doctors={doctors} /> 
    </div>
  );
}

export default Doctor;
