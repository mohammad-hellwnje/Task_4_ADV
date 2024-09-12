import React from 'react';
import './DepartmentInfo.css';

const departmentContent = {
  Cardiology: {
    title: 'Cardiology',
    description: 'Cardiology is a branch of medicine that deals with the disorders of the heart.',
    details: 'Cardiologists diagnose and treat heart diseases, and they focus on the health of the cardiovascular system.',
  },
  Neurology: {
    title: 'Neurology',
    description: 'Neurology is a branch of medicine dealing with disorders of the nervous system.',
    details: 'NeurologistsLorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ab fugit porro est quibusdamipsum inventore iste culpa, suscipit debitis aliquid.',
  },
  Hepatology: {
    title: 'Hepatology',
    description: 'Hepatology gallbladder, biliary tree, and pancreas.',
    details: 'Hepatologists Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ab fugit porro est quibusdamipsum inventore iste culpa, suscipit debitis aliquid',
  },
  Pediatrics: {
    title: 'Pediatrics',
    description: 'Pediatrics is the branch of consectetur adipisicing elit. Assumenda ab fugit porro est quibusdam.',
    details: 'Pediatrics Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ab fugit porro est quibusdamipsum inventore iste culpa, suscipit debitis aliquid',
  },
  Ophthalmologists: {
    title: 'Ophthalmologists',
    description: 'Omnis blanditis saepe eos autem qui sunt debitis porro quia.',
    details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ab fugit porro est quibusdamipsum inventore iste culpa, suscipit debitis aliquid',
  },
};

function DepartmentInfo({ selectedDepartment }) {
  const content = departmentContent[selectedDepartment];

  return (
    <div className='col-sm-8 col-12 px-sm-3 px-0 mt-sm-0 mt-4 '>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      <p>{content.details}</p>
    </div>
  );
}

export default DepartmentInfo;

