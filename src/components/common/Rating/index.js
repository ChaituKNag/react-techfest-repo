import React from 'react';
import Icon from '../Icon';

export default class Rating extends React.Component {
    constructor(props) {
        super(props);
        
        this.maxRating = props.maxRating;
        this.avgRating = props.avgRating;
    }

    createList = () => {
        let list = [];

        for(let i = 0; i < this.maxRating; i++){
            if(this.avgRating - i > 1){
                list.push(<li className="list-inline-item" key={i}><Icon iconName="star" iconType="solid"></Icon></li>);
            } else if((this.avgRating - i) > 0 && (this.avgRating - i) < 1) {
                list.push(<li className="list-inline-item" key={i}><Icon iconName="star-half-alt" iconType="solid"></Icon></li>);
            } else {
                list.push(<li className="list-inline-item" key={i}><Icon iconName="star" iconType="regular"></Icon></li>);
            }
        }
        return list;
    }

    render() {
        return (
            <ul className="list-inline">
                {this.createList()}
            </ul>
        );
    }
};


