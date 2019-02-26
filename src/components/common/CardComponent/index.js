import React from 'react';
import Image from '../Image';
import Rating from '../Rating';
import { Link } from "react-router-dom";

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class CardComponent extends React.Component {
    render() {
        const { id, imageUrl, name, category, price, rating } = this.props.product || this.props;
        return (
            <Card>
                <Link to={`/product/${id}`}>
                    <Image imageSrc={imageUrl} imageAlt={name} className="img-fluid card-img-top"></Image> 
                </Link>
                <CardBody>
                <Link to={`/product/${id}`}>
                    <CardTitle>{name}</CardTitle>
                </Link>
                {category && category.name ? (<CardSubtitle className="text-muted">{category.name}</CardSubtitle>) : null }
                
                <CardText>{price}</CardText>
                <Rating maxRating={5} avgRating={rating} className="text-warning"></Rating>
                </CardBody>
            </Card>
        );
    }
}

export default CardComponent;