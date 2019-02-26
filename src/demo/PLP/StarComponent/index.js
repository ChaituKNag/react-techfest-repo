import React from 'react';

import './index.scss';

const StarComponent=({isMarked})=>(
    
    <span className={isMarked?'highlighted-star':'vacant-star'}></span>
)
    
    

    


export default StarComponent;