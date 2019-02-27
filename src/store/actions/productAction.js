import {FETCH_PRODUCTS, productsAPI, categoryAPI, FETCH_CATEGORIES, FETCH_DETAIL,productDetailAPI } from '../constants';
import axios from 'axios';


function makeTree(nodes){
let  tree = function (data, root) {
    var r = [], o = {};
      data.forEach(function (a) {
          if (o[a.id] && o[a.id].children) {
              a.children = o[a.id] && o[a.id].children;
          }
          o[a.id] = a;
          if (a.parent === root) {
              r.push(a);
          } else {
              o[a.parent] = o[a.parent] || {};
              o[a.parent].children = o[a.parent].children || [];
              o[a.parent].children.push(a);
          }
      });
      return r;
  }(nodes, 0);

  return tree;
}

export const fetchProducts =  (callback) => dispatch => {
  return axios
         .get(productsAPI)
         .then(res => {
            let products = res.data;
            if (callback) {
              callback();
            }

              return dispatch({
                type: FETCH_PRODUCTS,
                payload: products
              });
            })
            .catch(err => {
              console.log('Could not fetch products. Try again later.'+err);
            });
}

export const fetchCategories = (callback) => dispatch => {
  return axios
        .get(categoryAPI)
        .then(res => {
          let categories = res.data;
          if(callback){
            callback();
          }
          let finalTree = makeTree(categories);

          return dispatch({
            type: FETCH_CATEGORIES,
            payload: finalTree
          });
        })
        .catch(err => {
          console.log('Could not fetch products. Try again later.'+err);
        });
}




export const fetchProductDetail = (id) => dispatch => {
  return axios
         .get(productDetailAPI+id)
         .then(res => {
          let detail = res.data; 
          return dispatch({
            type: FETCH_DETAIL,
            payload: detail
          });
         })
         .catch(err => {
          console.log('Could not fetch product. Try again later.'+err);
        });
}