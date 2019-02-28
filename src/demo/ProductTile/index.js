import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';
import { Link } from "react-router-dom";


import './index.scss'; 


class ProductTile extends React.Component {

    render() {
        const id= this.props.product.id;
        return (
            <React.Fragment>
            <Link to={`/product/${id}`} >
             <Card>
             <Image src={this.props.product.imageUrl}/>
             <Card.Content>
               <Card.Header>{this.props.product.name}</Card.Header>
               <Card.Meta>
                 <span className='date'> Price : RS.{this.props.product.price}</span>
               </Card.Meta>
               <Card.Description>
               <Rating icon='star' defaultRating={this.props.product.rating} maxRating={4} disabled/>
               </Card.Description>
             </Card.Content>
             {/* <Card.Content extra>
               
                 <Icon name='cart' />
                 Add To Cart
               
             </Card.Content> */}
           </Card>
           </Link>
           </React.Fragment>
          
        );
    }
};

export default ProductTile;
