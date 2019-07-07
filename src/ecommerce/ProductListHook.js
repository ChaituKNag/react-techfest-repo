import React, { useState, useEffect } from 'react';
import Product from './Product';
import Categories from './Categories';
import Pagination from './Pagination';

const ProductListHook = (props) => {
    const [products, setProducts] =  useState([]);
    const [categories, setCategories] =  useState([]);
    const [rerenderPagination, setRerenderPagination] = useState("true");
    const [groupedProducts, setGroupedProducts] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    let pageSize = 5;

    //effect to fetch Products
    useEffect(() => {
        props.fetchProducts();
        if(props.products[0]){
            setProducts(props.products[0]);
            groupProducts(props.products[0]);
        }
    },[props.products[0]])

    //effect to fetch categories
    useEffect(() => {
        props.fetchCategories();
        setCategories(props.categories);
    }, [props.categories])


    const groupProducts = (products) => {
        let objKeys = products && Math.ceil(products.length / pageSize), groupProd = {},
            startIndex = 0, endIndex = pageSize;

        for(var i=1; i <= objKeys; i++){
            groupProd[i] = products.slice(startIndex, endIndex);

            startIndex = endIndex;
            endIndex = endIndex + pageSize;
        }

        setGroupedProducts(groupProd);
    }

    const filterProductsByCategory = (categoryObj) => {
        let filteredProductList = products.filter(function(product){
          return product.category.id === categoryObj.id;
        });

        groupProducts(filteredProductList);
        setRerenderPagination("true");
        setCurrentPage(1);
    }

    const renderPageResults = (pageNumber) => {
        setRerenderPagination("false");
        setCurrentPage(pageNumber+1);
    } 

    return (  
    <React.Fragment>
        <div className="container d-flex py-3">
            <Categories categories={categories} filterProductsByCategory = {filterProductsByCategory}></Categories>
            <div className="col-sm-9 row">
            {
                groupedProducts[currentPage] && groupedProducts[currentPage].length > 0 && groupedProducts[currentPage].map((dataItem, index) => {
                return(
                    <Product dataItem={dataItem} key={index}></Product>
                    )
                })
            }
            </div>
        </div>

        <Pagination paginationLinks={groupedProducts && Object.keys(groupedProducts)} pageSize='5' renderPageResults = {renderPageResults} rerenderPagination={rerenderPagination}></Pagination>
    </React.Fragment>
    )
}

export default ProductListHook;