import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';  
import './AboutInfo.css';

function AboutInfo() {
  return (
    <div className='col-lg-6 col-12 mt-4 mt-lg-0'>
        <h2 className='fs-3 fw-bold'>
            Voluptatem dignissimos provident quasi corporis voluptates sit assumenda
        </h2>
        <p className='fst-italic text-secondary ps-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum nihil vel, doloremque amet ducimus obcaecati natus.
        </p>
        <div className="my-4 ps-2">
            <div className='d-flex'>
            <FontAwesomeIcon icon={faCheckDouble} className=" main-color me-2" />
            <p className='text-secondary'>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>
            <div className='d-flex'>
            <FontAwesomeIcon icon={faCheckDouble} className=" main-color me-2" />
            <p className='text-secondary'>
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
            </div>
            <div className='d-flex'>
            <FontAwesomeIcon icon={faCheckDouble} className="main-color me-2" />
            <p className='text-secondary mb-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam eos amet quidem dolorem provident vitae illo, suscipit quae voluptate similique error vero vitae illo quidem dolorem.
            </p>
            </div>
        </div>
        <p className='text-secondary ps-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi delectus, eum veritatis dicta blanditiis qui asperiores esse facilis voluptatum voluptas cumque aliquam. Veritatis, ipsa autem.
        </p>
    </div>
  );
}

export default AboutInfo;
