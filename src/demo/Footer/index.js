import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
   render(){
     return(
       <section class="footer row category-cart zero-margin">
        <div class="footer-heading col-md-12">
        E-Commerce
        <span class="footer-heading-subHeading">
        Platform
        </span>
        </div>
        <div class="col-md-12 nav-links">
        Home | Product Information | Privacy Policy | About us
        </div>
        </section> 
 

     );
   }
}

export default Footer;