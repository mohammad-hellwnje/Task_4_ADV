import React from 'react';
import './Title.css';

function Title({ title, description }) {
    return (
        <div className=" d-flex flex-column align-items-center justify-content-center my-5 container">
            <h2 className="text-center m-0 fw-bold">{title}</h2>
            <div className="underline my-3 bg-color"></div>
            <p className="text-center">{description}</p>

        </div>
    );
}

export default Title;
