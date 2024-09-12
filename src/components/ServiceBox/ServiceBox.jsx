import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faBrain, faLungs, faTooth, faStethoscope, faCapsules } from '@fortawesome/free-solid-svg-icons';
import './ServiceBox.css';

function ServiceBox({ serviceData }) {  
  const iconMap = {
    faHeartPulse: faHeartPulse,
    faBrain: faBrain,
    faLungs: faLungs,
    faTooth: faTooth,
    faStethoscope: faStethoscope,
    faCapsules: faCapsules
  };

  return (
    <div className='container'>
      <div className='row'>
        {serviceData.map(service => (
          <div key={service.id} className='col-lg-4 col-md-6 mb-4'>
            <div className="service-box text-center p-4">
              <div className="icon-box m-auto shadow d-flex justify-content-center align-items-center rounded-circle">
                <FontAwesomeIcon icon={iconMap[service.icon]} size="2x" className='main-color' />
              </div>
              <h2 className='fs-4 my-3'>{service.title}</h2>
              <div className="box bg-color m-auto"></div>
              <p className='mt-3 text-muted'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceBox;
