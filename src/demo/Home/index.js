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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui quam facilis ratione saepe rem necessitatibus nobis, laborum similique? Consectetur.</p>
                { this.state.users && 
                    <div>
                        <h2>Users Listed</h2>
                        <ul>
                            {
                                this.state.users.map((user, index) => (
                                                                    <li key={index}>
                                                                        {user.name}
                                                                    </li>
                                                                )
                                                    )
                            }
                            
                        </ul>
                    </div>
                }
                { !this.state.users.length && <p>Loading users...</p> }
            </div>
        );
    }
};

export default Home;
