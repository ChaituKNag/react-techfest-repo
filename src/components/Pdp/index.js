import React, {
    Component
} from "react";
import { connect } from 'react-redux'

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
        return(
            <div>
                <div>
                    <img src={this.props.productData.imageUrl} alt="sample" />
                    <p>{this.props.productData.name}</p>
                    <p>{this.props.productData.price}</p> 
                    <p>{this.props.productData.rating}</p>                
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        productData: state.productData
    };
  };

export default connect(mapStateToProps)(ProductDetails);