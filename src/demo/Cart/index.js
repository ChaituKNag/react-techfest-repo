import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {deleteCartItem} from '../../store/actions';
import { Item, Rating, Button, Header, Icon} from 'semantic-ui-react'
class Cart extends Component {
 
    render() {
        var total=0;
        
        const renderCart = this.props.items.map((product) => {

            total = total + (product.qty*product.price)
            return (
               
                    <Item key = {product.id}>
                    <Item.Image size='small' src={product.imageUrl} />

                    <Item.Content>
                        <Item.Header as='a'>{product.name} </Item.Header>
                        <span className="align-right">
                        <Icon  name="trash" className="trash-icon cursor-ptr" onClick={() =>
                        this.props.onDeleteClick(product.id)
                        }/>
                        </span>
                        <Item.Description>
                        <p>{product.description}</p>
                        <Rating icon='star' defaultRating={product.rating} maxRating={5} disabled/>
                        <p>{product.qty} X {product.price} = {product.qty*product.price}</p>
                        <p></p>
                        </Item.Description>
                    </Item.Content>
                    </Item>
               
            )
          });

          if (total) {
            var totalele = (
                <div className="align-right">
                    <p>Total : {total}</p>
                    <Link to="/">
                    <Button basic>
                        Continue Shopping
                    </Button>
                    </Link>
                    <Button color="yellow">
                        Checkout
                    </Button>
                </div>
                
            );
          }
 
        return (
            
            <div className="wrapper-pad">
                 <Header as='h2'>
                    SHOPPING CART
                </Header>
                <Item.Group>
                    {renderCart}
                </Item.Group>
            
                {totalele}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.cartDetails,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteClick: (id) => { dispatch(deleteCartItem(id))}
      }
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);




