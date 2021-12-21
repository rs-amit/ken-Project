import React from 'react';
import "./Facts.css";



function Facts({ Icon, number, action }) {
    return (
        <div className='facts'>
            <div>
                <div className='aboutFacts'>
                    <h3>{number}</h3>
                    <p>{action}</p>
                </div>
                <div className='fact-icons'><Icon className="icons"/></div>
            </div>

        </div>
    )
}

export default Facts

