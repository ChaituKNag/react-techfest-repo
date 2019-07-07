import React from 'react';
import logo from '../assets/logo_footer.png';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav className="navbar custom-bg-color">
                {
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo"/>
                    </Link>
                }
            </nav>
        )
    }
}

export default Footer;