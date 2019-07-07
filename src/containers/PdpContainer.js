import  Pdp  from '../ecommerce/Pdp';
import { connect }  from 'react-redux';
import { fetchProductDetailsById, addProductToBag } from '../store/actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        productData : state.productData
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchProductDetailsById: (productId) => {
        dispatch(fetchProductDetailsById(productId));
    },
    addProductToBag: (productId) => {
        dispatch(addProductToBag(productId));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pdp)