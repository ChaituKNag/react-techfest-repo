import React, {
    Component
} from "react";
import { connect } from 'react-redux';

import { getProductData } from '../../actions/PdpActions';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetails: {}
        };
    }
    componentDidMount() {
        const { dispatch, match } = this.props;
        dispatch(getProductData(match.params.productId));
    }

    render() {
        const { imageUrl, name, price, rating } = this.props.productData;
        return (
            <div>
                <div>
                    <img src={imageUrl} alt="sample" />
                    <p>{name}</p>
                    <p>{price}</p> 
                    <p>{rating}</p>                
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        productData: state.productData
    };
  };

export default connect(mapStateToProps)(ProductDetails);