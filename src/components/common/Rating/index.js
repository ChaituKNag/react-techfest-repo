import React from 'react';
import Icon from '../Icon';

export default class Rating extends React.Component {
    createList = () => {
        let list = [];

        for(let i = 0; i < this.props.maxRating; i++){
            if(this.props.avgRating > i){
                list.push(<li className="list-inline-item" key={i}><Icon className={this.props.className} iconName="star" iconType="solid"></Icon></li>);
            } else if((this.props.avgRating - i) > 0 && (this.props.avgRating - i) < 1) {
                list.push(<li className="list-inline-item" key={i}><Icon className={this.props.className} iconName="star-half-alt" iconType="solid"></Icon></li>);
            } else {
                list.push(<li className="list-inline-item" key={i}><Icon className={this.props.className} iconName="star" iconType="regular"></Icon></li>);
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


