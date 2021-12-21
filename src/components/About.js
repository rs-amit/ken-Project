import React from 'react';
import "./About.css";

function About({img, title, disc}) {
    return (
        <div className="about">
            <img
               src={img}
               alt=""
               className='icons'
            />
            <h3>{title}</h3>
            <p>{disc}</p>
        </div>
    )
}

export default About
