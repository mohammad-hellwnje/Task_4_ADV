import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './FormInput.css';

function FormInput() {
  const departments = ["Cardiology", "Neurology", "Orthopedics", "Dentistry"];
  const doctors = ["Dr. Mohammaf", "Dr. Ali", "Dr. Ahmad", "Dr. Abdullatif"];
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-3">
          <input type="text" placeholder='Your Name' className='form-control' />
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <input type="email" placeholder='Your Email' className='form-control' />
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <input type="text" placeholder='Your Phone' className='form-control' />
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <input type="date" className='form-control' />
        </div>
        <div className="col-lg-4 col-md-6 mb-3 position-relative">
          <select 
            className='form-control' 
            value={selectedDepartment} 
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">Select Department</option>
            {departments.map((department, index) => (
              <option key={index} value={department}>{department}</option>
            ))}
          </select>
          <FontAwesomeIcon icon={faChevronDown} className="position-absolute top-50 end-0 translate-middle-y me-3" />
        </div>
        <div className="col-lg-4 col-md-6 mb-3 position-relative">
          <select 
            className='form-control' 
            value={selectedDoctor} 
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>{doctor}</option>
            ))}
          </select>
          <FontAwesomeIcon icon={faChevronDown} className="position-absolute top-50 end-0 translate-middle-y me-3" />
        </div>

        <div className="col-12 mb-3">
          <textarea className="form-control" rows="5" placeholder="Message (Optional)"></textarea>
        </div>
        <div className="col-12 d-flex justify-content-center mb-4">
        <button type="button" class="border-0 bg-color text-light rounded px-5 py-2">Make an Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default FormInput;

