import React from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import ModalComponent from "../ModalComponent";
import Image from "../Image";
import Rating from "../Rating";
import Cta from '../Cta';
import "./index.scss";

class CardComponent extends React.Component {
  render() {
    const { id, imageUrl, name, category, price, rating } =
      this.props.product || this.props;
    const { isCart } = this.props;
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

          <CardText>{price}</CardText>
          <Rating maxRating={5} avgRating={rating} className="text-warning" />
        </div>
        <div className="action-btns">
            {isCart && <ModalComponent buttonLabel="Delete Item" modalClass="remove-from-cart-modal" modalContent="Are you sure want to remove this from cart?" modalTriggerButtonClass="remove-from-cart-button"/> }
            <Cta ctaType="link" ctaPath="#" ctaText="Save for Later" className="add-to-wishlist"/>
        </div>
        </CardBody>
      </Card>
    );
  }
}

export default CardComponent;
