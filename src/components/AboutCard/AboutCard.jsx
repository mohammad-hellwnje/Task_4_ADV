import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faHospital, faUsers, faProcedures } from '@fortawesome/free-solid-svg-icons';
import './AboutCard.css';

function AboutCard() {
    const cardData = [
        { id: 1, icon: faUserDoctor, number: 25, label: "Doctors" },
        { id: 2, icon: faHospital, number: 15, label: "Hospitals" },
        { id: 3, icon: faUsers, number: 8, label: "Patients" },
        { id: 4, icon: faProcedures, number: 150, label: "Surgeries" }
    ];

    return (
        <div className="row container p-0">
            {cardData.map((card) => (
                <div key={card.id} className="col-lg-3 col-md-6 col-sm-12 mb-4  d-flex  justify-content-center p-0 gap-2 ">
                    <div className="card1 d-flex  justify-content-evenly align-items-center  box-shadow px-4 py-3  w-100 mx-2 rounded">
                        <FontAwesomeIcon icon={card.icon} size="2x" className="main-color" />
                        <div className="card1-info">
                            <h3 className='m-0 fw-bold'>{card.number}</h3>
                            <span className='text-muted'>{card.label}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AboutCard;

