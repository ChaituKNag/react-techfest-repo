import React from 'react';
import BackgroundImg from '../../../resources/img/offer1.PNG';
import './Banner.scss';

const Banner = () => {
  return (
    <div className="jumbotron jumbotron-fluid banner" style={{backgroundImage:"url("+BackgroundImg+")"}}>
       <div className="container-fluid">
          <h3 className="display-4">REPUBLIC DAY SALE</h3>
          <h4 className="display-5">Up to 60% off<sup>*</sup></h4>
          <p>Google Home and Google Home Mini</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Explore</a>
       </div>
    </div>
  )
}

export default Banner;