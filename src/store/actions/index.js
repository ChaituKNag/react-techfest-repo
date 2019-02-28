import { getAllProducts, getProductById, addProductToCart, getCategories, getProductOnSearch } from '../../api';

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT_BY_ID = "FETCH_PRODUCT_BY_ID";
export const FETCH_ORDER_TOTAL = "FETCH_ORDER_TOTAL";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"; // for post call
export const ADD_TO_CART = "ADD_TO_CART"; // get cart details not woeking so temp.
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_PRODUCT_ON_SEARCH = "FETCH_PRODUCT_ON_SEARCH";
export const LIST_GRID_VIEW = "LIST_GRID_VIEW";
export const FETCH_BY_CATEGORY = "FETCH_BY_CATEGORY";
export const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";

export function fetchProductsSuccess(data) {
    const action = {
        type: FETCH_PRODUCTS,
        data
    }

    return action;
}

export function fetchProductByIdSuccess(data) {
    const action = {
        type: FETCH_PRODUCT_BY_ID,
        data
    }
    return action;
}

export function fetchOrderTotal(data) {
    const action = {
        type: FETCH_ORDER_TOTAL,
        data
    }

    return action;
}

export function addProductToCartSuccess(data) {
    const action = {
        type: ADD_PRODUCT_TO_CART,
        data
    }

    return action;
}

export function fetchCategoriesSuccess(data) {
    const action = {
        type: FETCH_CATEGORIES,
        data
    }
    return action;
}

export function listGridView(data) {
    const action = {
        type: LIST_GRID_VIEW,
        data
    }
    return action;
}

export function addProductDetailsToCart(data) {
    const action = {
        type: ADD_TO_CART,
        data
    }

    return action;
}

export function deleteItemFromCart(data) {
    debugger;
    const action = {
        type: DELETE_ITEM_FROM_CART,
        data
    }
    return action;
}

export function fetchByCategory(data) {
    const action = {
        type: FETCH_BY_CATEGORY,
        data
    }
    return action;
}

export function getProductOnSearchSuccess(data) {
    const action = {
        type: FETCH_PRODUCT_ON_SEARCH,
        data
    }
    return action;
}


export function fetchProducts() {
    return function(dispatch) {
        return getAllProducts().then(products => {
            dispatch(fetchProductsSuccess(products.data));
        }).catch(error => {
            throw (error)
        });
    }
}

export function fetchProductById(id) {
    return function(dispatch) {
        return getProductById(id).then(product => {
            dispatch(fetchProductByIdSuccess(product.data))
        }).catch(error => {
            throw (error);
        })
    }
}

export function addProductItemToCart(data) {
    return function(dispatch) {
        return addProductToCart(data).then(data => {
            dispatch(addProductToCartSuccess(data.data));
        }).catch(error => {
            throw (error);
        })
    }
}

export function fetchCategories() {
    return function(dispatch) {
        return getCategories().then(data => {
            dispatch(fetchCategoriesSuccess(data.data));
        }).catch(error => {
            throw (error);
        })
    }
}

export function fetchSingleProduct(id) {
    return function(dispatch) {
        return getProductOnSearch(id).then(data => {
            dispatch(getProductOnSearchSuccess(data.data));
        }).catch(error => {
            throw (error);
        })
    }
}