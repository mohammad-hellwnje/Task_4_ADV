// import React from 'react'
// import './AboutInfo2.css'
// function AboutInfo2() {
//   return (
//     <div className='col-lg-4'>
//         <h3 className='fw-bold'>Enim quis est Voluptatibus aliquid consequatur fugiat</h3>
//         <div className='bord bg-color my-3'></div>
//         <p className='text-muted '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis aperiam cumque enim doloremque dolore aut libero maxime ratione. Minus, omnis?</p>
//         <div>
//             <div className="icon">
//             <FontAwesomeIcon icon="fa-solid fa-heart-pulse" />
//             </div>
//             <h4>Lorem Ipsum</h4>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos suscipit magnam rem?</p>
//         </div>
//     </div>
//   )
// }

// export default AboutInfo2
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faBrain, faLungs, faTooth } from '@fortawesome/free-solid-svg-icons';
import './AboutInfo2.css';

function AboutInfo2() {
    const iconData = [
        { id: 1, icon: faHeartPulse, title: "Heart Health", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit magnam rem?" },
        { id: 2, icon: faBrain, title: "Brain Health", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit magnam rem?" },
        { id: 3, icon: faLungs, title: "Lung Health", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit magnam rem?" },
        { id: 4, icon: faTooth, title: "Dental Health", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit magnam rem?" }
    ];

    return (
        <div className='col-lg-4 col-12 mt-4 m-lg-0'>
            <h3 className='fw-bold'>Enim quis est Voluptatibus aliquid consequatur fugiat</h3>
            <div className='bord bg-color my-3'></div>
            <p className='text-muted mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis aperiam cumque enim doloremque dolore aut libero maxime ratione. Minus, omnis?</p>
            {iconData.map(item => (
                <div key={item.id} className="icon-info  d-flex mt-3 ">
                    <div className="icon mb-2">
                        <FontAwesomeIcon icon={item.icon} size="2x" className='main-color me-4 Larger shadow p-2' />
                    </div>
                    <div>
                        <h4>{item.title}</h4>
                        <p className='m-0'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AboutInfo2;
