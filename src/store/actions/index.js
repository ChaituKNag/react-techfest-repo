import axios from 'axios';


// this groupBy is used to group an object based on an desired attribute 
Array.prototype.groupBy = function(prop) {
    return this.reduce(function(groups, item) {
      const val = item[prop]
      groups[val] = groups[val] || []
      groups[val].push(item)
      return groups
    }, {})
}

//pure
export const loadCategories = (jsonData) => {
    return {
      type : "GET_CATEGORIES",
      categories : jsonData.groupBy('parent')
    };
}


//pure
export const loadProducts = (jsonData) => {
    return {
      type : "GET_PRODUCTS",
      products : jsonData
    };
}

export const filterProductsByCategory = (categoryId) => {    
    return {
        type: "FILTER_PRODUCTS_BY_CATEGORY",
        filteredProducts: categoryId
    }
}

export const loadProductDetail = (productData) => {
    return {
        type: "GET_PRODUCT_DETAIL_BY_ID",
        productData: productData
    }
}
    

//async - impure
export const fetchProducts = () => {
    return (dispatch) => {
        return axios.get('http://localhost:4567/api/product')
        .then(products => {
          dispatch(loadProducts(products.data));
        });
    }
}


//async - impure
export const fetchCategories = () => {
    return (dispatch) => {
        return axios.get('http://localhost:4567/api/category')
        .then(categories => {
          dispatch(loadCategories(categories.data));
        });
    }
}

export const fetchProductDetailsById = (productId) => {
    return (dispatch) => {
        return axios.get(`http://localhost:4567/api/product/description/${productId}`)
                .then(productDetails => {
                    dispatch(loadProductDetail(productDetails.data));
                });
    }
}

export const fetchProductsInBag = () => {
    return {
        type: 'GET_PRODUCTS_IN_BAG'
    }
}

export const fetchProductsOnSearchTerm = (searchTerm) => {
    return {
        type: 'FETCH_PRODUCTS_ON_SEARCH',
        searchTerm
    }
}

export const addProductToBag = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_BAG',
        product
    }
}

export const deleteProdFromBag = (product) => {
    return {
        type: 'DELETE_PRODUCT_FROM_BAG',
        product
    }
}