import React from 'react';
import logo from '../assets/logo_header.png';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav>
                {
                    <div className="navbar custom-bg-color">
                        <Link to="/">
                            <img src={logo} alt="logo" className="logo"/>
                        </Link>

                        <div className="main">
                            <div className="form-group has-search">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" className="form-control" placeholder="Search"/>
                            </div>
                        </div>

                        <div>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <div>
                        <i className="far fa-user-circle"></i>
                        </div>
                    </div>
                }
            </nav>
        )
    }
}

export default Header;