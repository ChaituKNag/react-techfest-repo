import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import ModalComponent from "../ModalComponent";
import Image from "../Image";
import Rating from "../Rating";
import Cta from '../Cta';
import Price from '../Price';
import InputComponent from '../InputComponent';
import { updatePrice } from '../../../actions/CartActions';

import "./index.scss";

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }
  onQuantityChange(id, event) {
    const quantity = event.target.value || 1;
    this.setState({
      quantity
    });
    this.props.dispatch(updatePrice(id, quantity));
  }
  render() {
    const { id, imageUrl, name, category, price, rating } =
      this.props.product || this.props;
    const { isCart, isListView } = this.props;
    return (
      <Card>
        <Link to={`/product/${id}`}>
          <Image
            imageSrc={imageUrl}
            imageAlt={name}
            className="img-fluid card-img-top"
          />
        </Link>
        <CardBody>
        <div className="details-section">
          <Link to={`/product/${id}`}>
            <CardTitle>{name}</CardTitle>
          </Link>
          {category && category.name ? (
            <CardSubtitle className="text-muted">{category.name}</CardSubtitle>
          ) : null}
          {isCart ?
          <div className="price-section">
            <InputComponent inputType="number" className="price-input" inputPlaceholder="quantity" onChangeHandler={this.onQuantityChange.bind(this, id )} minValue={1}/>
            * <Price currency="$" price={price}/> = <Price currency="$" price={this.state.quantity * price}/>
          </div>
          : <Price currency="$" price={price}/> }
          <Rating maxRating={5} avgRating={rating} className="text-warning" />
        </div>
        {isListView && <div className="action-btns">
            {isCart && <ModalComponent buttonLabel="Delete Item" modalClass="remove-from-cart-modal" modalContent="Are you sure want to remove this from cart?" modalTriggerButtonClass="remove-from-cart-button"/> }
            <Cta ctaType="link" ctaPath="#" ctaText="Save for Later" className="add-to-wishlist"/>
        </div>
        }
        </CardBody>
      </Card>
    );
  }
}

export default connect()(CardComponent);
