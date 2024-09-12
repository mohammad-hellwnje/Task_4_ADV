import DepartmentImage from '../DepartmentImage/DepartmentImage';
import DepartmentInfo from '../DepartmentInfo/DepartmentInfo';
import DepartmentSection from '../DepartmentSection/DepartmentSection';
import React, { useState } from 'react';
import Title from '../Title/Title';
import './Department.css';

function Department() {
  const [selectedDepartment, setSelectedDepartment] = useState('Ophthalmologists');

  return (
    <div>
      <Title title="Departments" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
      <div className='d-flex container flex-lg-row flex-column'> 
        <div className='d-flex mb-4 flex-sm-row flex-column'>
          <DepartmentSection onSelectDepartment={setSelectedDepartment} />
          <DepartmentInfo selectedDepartment={selectedDepartment} />
        </div>
        <div className='mb-4'>
          <DepartmentImage selectedDepartment={selectedDepartment} />
        </div>
      </div>
    </div>
  );
}

export default Department;
