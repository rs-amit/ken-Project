import React from 'react';
import "./MobileFeature.css"

function MobileFeature({id, title, disc}) {
    return (
        <div className="features">
            <p><span>{id}</span></p>
            <div className="features-info">
                <div>{title}</div>
                <p>{disc}</p>
            </div>
            
        </div>
    )
}

export default MobileFeature
