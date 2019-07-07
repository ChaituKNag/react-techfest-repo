import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default class Product extends Component {

  constructor(props){
    super(props);
  }
 
  render() {
    let dataItem = this.props.dataItem;

    return (
      <div className="product my-3 mx-2 py-4 px-4 col-md-3" data-prod-id={dataItem.id} key='{dataItem.id}'>
      <Link to={`/pdp/${dataItem.id}`}>
          <img src={dataItem.imageUrl} alt="" className="prod-image"/>
          <h5 className="prodTitle mt-3">{dataItem.name}</h5>
          <p className="subTitle">{dataItem.category.name}</p>
          <p className="rating rateyo">{dataItem.rating}</p>
          <div className="rateyo" data-rateyo-rating="1" data-rateyo-num-stars="5" data-rateyo-score="4"></div>
          <Rating></Rating>
          <p className="rating">Category ID: {dataItem.category.id}</p>
      </Link>
        </div>
    )
  }
}
