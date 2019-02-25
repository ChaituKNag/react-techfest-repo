import React from 'react';
import axios from 'axios';

import HeaderComponent from '../Header';
import FooterComponent from '../footer';


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            pageContent:'plp'
        }
    }
    componentDidMount(){
        const homeObj = this;
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                homeObj.setState({
                    users: response.data
                })
            })
            .catch(error => {
                throw(error);
            });
    }
    render() {

        const pageContentState = this.state.pageContent;
        let pageContent;

        if(pageContentState==='plp'){
            pageContent=<div>plp</div>;
         }
         if(pageContentState==='pdp'){
            pageContent=<div>pdp</div>;
         }
         if(pageContentState==='cart'){
            pageContent=<div>cart</div>;
         }
        return (
           <div>
               <HeaderComponent/>
               {pageContent}
               <FooterComponent/>
               </div>
        );
    }
};

export default Home;
