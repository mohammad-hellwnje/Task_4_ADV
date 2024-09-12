import React, { useState } from 'react';
import './DepartmentSection.css';

function DepartmentSection({ onSelectDepartment }) {
  const [activeDepartment, setActiveDepartment] = useState('Ophthalmologists');
  
  const departments = ['Cardiology', 'Neurology', 'Hepatology', 'Pediatrics', 'Ophthalmologists'];

  const handleDepartmentClick = (department) => {
    setActiveDepartment(department);
    onSelectDepartment(department); 
  };

  return (
    <div className='col-sm-4 col-12'>
      <ul className='p-0 border-end d-flex flex-column justify-content-between h-100 m-0'>
        {departments.map((department) => (
          <li
            key={department}
            className={`m-sm-0 mb-3 ${activeDepartment === department ? 'list-active' : ''}`}
            onClick={() => handleDepartmentClick(department)}
          >
            {department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentSection;
