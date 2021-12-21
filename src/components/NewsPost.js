import React from 'react';
import "./NewsPost.css"
import img7 from "../Assert/img-post-two.jpg"

function NewsPost({time,title,disc,img}) {
    return (
        <div className="post-container">
           <img 
              src={img}
              alt=""
            />
           <div>
               <span>{time}</span>
               <h3>{title}</h3>
               <p>{disc}</p>
           </div>
            
        </div>
    )
}

export default NewsPost
