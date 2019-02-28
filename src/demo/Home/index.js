import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
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
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
};

export default Home;
