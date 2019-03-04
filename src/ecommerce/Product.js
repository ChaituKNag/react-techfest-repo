import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    let dataItem = this.props.dataItem;

    return (
      <div className="product my-3 mx-2 py-4 px-4 col-md-3" data-prod-id={dataItem.id} key='{dataItem.id}'>
        <img src={dataItem.imageUrl} alt="" className="prod-image"/>
        <h5 className="prodTitle mt-3">{dataItem.name}</h5>
        <p className="subTitle">{dataItem.category.name}</p>
        <p className="rating">{dataItem.rating}</p>
        <p className="rating">Category ID: {dataItem.category.id}</p>
      </div>
    )
  }
}
