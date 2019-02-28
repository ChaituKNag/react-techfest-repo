import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';
import './product.css';

class ProductItem extends Component {

    handleNavigation(id) {
        this.props.history.push('/product/' + id);
    }

    render() {
        return ( <
            div className = { `product category-cart  ${this.props.listOrGrid =='list' ? 'col-md-12' : 'cart-height col-md-5'}` }
            onClick = { this.handleNavigation.bind(this, this.props.product.id) } >
            <
            div className = { `product-image ${this.props.listOrGrid =='list' ? 'col-md-3' : ''}` } >
            <
            img src = { this.props.product.imageUrl } >
            <
            /img> < /
            div > <
            h4 className = "product-name" > { this.props.product.name } < /h4> <
            div >
            <
            StarRatings rating = { this.props.product.rating }
            starRatedColor = "gold"
            numberOfStars = { 5 }
            starDimension = "25px"
            name = 'rating' /
            >
            <
            /div> < /
            div >
        );
    }
};

function mapStateToProps(state) {
    return {
        listOrGrid: state.ListGridReducer
    }
}

export default connect(mapStateToProps, null)(withRouter(ProductItem));