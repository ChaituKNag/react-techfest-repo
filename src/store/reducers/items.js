export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}

export function productDetails(state = {}, action) {
    switch (action.type) {
        case 'PRODUCT_DETAILS_DATA_SUCCESS':
            return action.productDetails;
        default:
            return state;
    }
}

export function cartDetails(state = [], action) {
    switch (action.type) {
        case 'PRODUCT_CART_DATA_SUCCESS':
            if(state.length>0){
            var match = false;
            var updatedItems = state.map(item => {
                if(item.id === action.id){
                match = true
                action.productData.qty =  item.qty+1;
                return { ...item, ...action.productData }
                
                }
                return item
            })

            if(match==true){
                return updatedItems
            }else{
                return [...state, action.productData]
            }
            
            }else{
                return [action.productData]
            }

        case 'PRODUCT_DELETE_SUCCESS': 
            var temp = state.filter(item => {
                return item.id !== action.id;
            })

            return temp;

        default:
            return state;
    }
}