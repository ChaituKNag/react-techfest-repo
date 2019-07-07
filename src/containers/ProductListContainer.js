import {ProductList} from '../ecommerce/ProductList';
import { connect }  from 'react-redux';
import { fetchProducts, fetchCategories } from '../store/actions';

import ProductListHook from '../ecommerce/ProductListHook';

const mapStateToProps = (state, ownProps) => {
    return ({
        products: state.products,
        categories: state.categories
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchProducts: () => {
        dispatch(fetchProducts());
    },
    fetchCategories: () => {
        dispatch(fetchCategories());
    },
    filterProductsByCategory: (categoryId) => {
        // dispatch(filterProductsByCategory(categoryId));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListHook)