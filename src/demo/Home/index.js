import React from 'react';
import axios from 'axios';




class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            pageContent:'plp'
        }
    }
    componentWillMount(){
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
               {pageContent}
               </div>
        );
    }
};

export default Home;
