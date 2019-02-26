import React from 'react';
import Image from '../Image';
import Rating from '../Rating';
import { Link } from "react-router-dom";

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class CardComponent extends React.Component {
    render() {
        return (
            <Card>
                <Link to={`/product/${this.props.id}`}>
                    <Image imageSrc={this.props.imageUrl} imageAlt={this.props.name} className="img-fluid card-img-top"></Image> 
                </Link>
                <CardBody>
                <CardTitle>{this.props.name}</CardTitle>
                <CardSubtitle className="text-muted">{this.props.category.name}</CardSubtitle>
                <CardText>{this.props.price}</CardText>
                <Rating maxRating={5} avgRating={this.props.rating} className="text-warning"></Rating>
                </CardBody>
            </Card>
        );
    }
}

export default CardComponent;