import { FETCH_PRODUCTS, FETCH_PRODUCT_ON_SEARCH, FETCH_BY_CATEGORY } from '../actions';

export function FetchProductsReducer(state = [], action) {
    debugger;
    switch (action.type) {
        case FETCH_PRODUCTS:
            return Object.assign([], ...state, action.data);

        case FETCH_PRODUCT_ON_SEARCH:
            var temp = Object.assign([], state);
            return Object.assign([], ...state, temp.filter((result) => {
                return result.id == action.data.id;
            }));

        case FETCH_BY_CATEGORY:
            var temp = Object.assign([], state);
            debugger;

            var temp1 = temp.filter((result) => {
                return result.category.name == action.data;
            });

            console.log(temp1);
            console.log(temp);
            console.log(state);

            return temp1;

            // return Object.assign([], ...state, temp.filter((result) => {
            //     return result.category.name == action.data;
            // })
            // );

        default:
            return state;
    }
}