import axios from 'axios';

// export const getProducts = () => ({
//     type: "GET_PRODUCTS"
// });

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


//async - impure
export const fetchProducts = () => {
    return (dispatch) => {
        return axios.get('http://localhost:4567/api/product')
        .then(products => {
            console.log('Products', products);
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