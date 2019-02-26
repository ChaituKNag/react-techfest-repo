import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductData, addToCart } from "../../actions/PdpActions";
import Cta from "../common/Cta";
import Rating from '../common/Rating';

class ProductDetails extends Component {
    componentDidMount() {
        const { match } = this.props;
        this.props.getProductData(match.params.productId);
    }

    addToCart() { 
        this.props.addProductToCart(this.props.productData);
    }

    render() {
        const { imageUrl, name, price, rating } = this.props.productData;
        return (
            <div>
                <div>
                    <img src={imageUrl} alt="sample" />
                    <p>{name}</p>
                    <p>{price}</p>
                    <Rating maxRating={5} avgRating={rating} className="text-warning"></Rating> {rating}
                </div>
                <Cta
                    ctaColor="warning"
                    ctaText="Buy Now"
                    ctaType="button"
                    onClickHandler={this.addToCart.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        productData: state.pdpData.productData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProductData: (productData) => {
            dispatch(getProductData(productData));
        },
        addProductToCart: (productData) => {
            dispatch(addToCart(productData));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
