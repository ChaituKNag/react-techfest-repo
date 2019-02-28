import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetails, getProductData } from '../../store/actions';
import { Grid, Segment, Button, Rating } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import './index.scss';


class ProductDetails extends Component {
    componentDidMount() {
        this.props.fetchProductDetails(`http://localhost:4567/api/product/description/${this.props.match.params.id}`);    
    }
  

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(){
        this.props.getProductData(`http://localhost:4567/api/product/${this.props.match.params.id}`);   
      }
      render() {

        return (
        <div className="wrapper-pad">
            <Grid columns='equal'>
                <Grid.Column width={4} className="text-center">
                    <Segment><img className="img-100" src={this.props.productDetails.product && this.props.productDetails.product.imageUrl}/></Segment>
                    <Link to="/cart">
                        <Button color='yellow' onClick={this.handleClick.bind(this)}>BUY NOW</Button>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <h3>{this.props.productDetails.product && this.props.productDetails.product.name}</h3>
                    <p>Price : RS.{this.props.productDetails.product && this.props.productDetails.product.name}</p>
                    <Rating icon='star' defaultRating={this.props.productDetails.product && this.props.productDetails.product.rating}maxRating={5} disabled/>
                   <p>{this.props.productDetails.description}</p>
                </Grid.Column>
            </Grid>
            
       </div>

        )
      }

}
const mapStateToProps = (state) => {
    
    return {
        productDetails: state.productDetails 
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductDetails: (url) => dispatch(fetchProductDetails(url)),
        getProductData : (url) => dispatch(getProductData(url))

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);




