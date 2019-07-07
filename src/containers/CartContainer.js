import  Cart  from '../ecommerce/Cart';
import { connect }  from 'react-redux';
import { fetchProductsInBag, deleteProdFromBag } from '../store/actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        productData : state.productData
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchProductsInBag: () => {
        dispatch(fetchProductsInBag());
    },
    deleteProdFromBag: (product) => {
        dispatch(deleteProdFromBag(product));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)