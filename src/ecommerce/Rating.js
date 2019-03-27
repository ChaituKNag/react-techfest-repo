import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import jQuery from 'jquery';
// import rateYo from 'rateyo';

export default class Rating extends Component {
    constructor(props){
        super(props);
        this.state = {
            'rating': 0
        }
    }

    componentDidMount() {
        // var el = ReactDOM.findDOMNode(this.refs.rateyo);

        // jQuery(el).rateYo({ 
        //     rating: this.state.rating,
        //     onSet: function(rating) {
        //     this.setState({rating: rating});
        //     }.bind(this)
        // });
    }

    render() {
        return (
            <div>
                {/* <div ref="rateyo"></div>
                <p>Current rating: {this.state.rating}</p> */}

                Rating Component
            </div>
            )
        }
}
