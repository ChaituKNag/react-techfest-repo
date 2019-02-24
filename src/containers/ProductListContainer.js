import {ProductList} from '../ecommerce/ProductList';
import { connect }  from 'react-redux';
import { fetchProductsFromServer } from '../store/actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        products: state.products
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchProducts: () => {
        console.log('check:', typeof fetchProductsFromServer);
        dispatch(fetchProductsFromServer());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)