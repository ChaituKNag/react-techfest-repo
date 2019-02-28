import axios from 'axios';
export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

/* export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
} */

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        axios.get(url)
            .then(response => {
                dispatch(itemsIsLoading(false));
                dispatch(itemsFetchDataSuccess(response.data))
            })
            .catch(() => {
                dispatch(itemsHasErrored(true))
            });
    };
}

export function productDetailsSuccess(productDetails) {
    return {
        type: 'PRODUCT_DETAILS_DATA_SUCCESS',
        productDetails
    };
}

export function addToCartSuccess(productData) {
    return {
        type: 'PRODUCT_CART_DATA_SUCCESS',
        productData,
        id : productData.id
    };
}

export function fetchProductDetails(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        axios.get(url)
            .then(response => {
                /* dispatch(itemsIsLoading(false));*/
                dispatch(productDetailsSuccess(response.data)) 
            })
            .catch(() => {
                dispatch(itemsHasErrored(true))
            });
    };
}

export function getProductData(url) {
    return (dispatch) => {
       
        axios.get(url)
            .then(response => {
               response.data.qty=1;
               dispatch(addToCartSuccess(response.data)) 
            })
            .catch(() => {
                /* dispatch(itemsHasErrored(true)) */
            });
    };
}



export function deleteCartItem(id) {
    return {
        type: 'PRODUCT_DELETE_SUCCESS',
        id
    };
}