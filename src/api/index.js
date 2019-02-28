import axios from 'axios';

export function getAllProducts() {
    try {
        return axios.get('http://localhost:4567/api/product')
    } catch (error) {
        console.error(error)
    }
}

export function getProductById(id) {
    try {
        return axios.get('http://localhost:4567/api/product/description/' + id)
    } catch (error) {
        console.error(error)
    }
}

export function addProductToCart(data) {
    try {
        return axios.post('http://localhost:4567/api/cart',
            data
        )
    } catch (error) {
        console.error(error)
    }
}

export function getCategories() {
    try {
        return axios.get('http://localhost:4567/api/category')
    } catch (error) {
        console.error(error)
    }
}

export function getProductOnSearch(id) {
    try {
        return axios.get('http://localhost:4567/api/product/' + id)
    } catch (error) {
        console.error(error)
    }
}