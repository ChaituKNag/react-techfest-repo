import React from 'react';

import './index.scss';

const StarComponent=({rating})=>{

    let stars=[];

    for(let i=0;i<5;i++)
        stars.push(
            <span className={(i<parseInt(rating,10))?'highlighted-star':'vacant-star'} key={i}></span>
        )
   return stars
}
    
    
    

    


export default StarComponent;