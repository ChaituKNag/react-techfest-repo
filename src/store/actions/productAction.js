import {FETCH_PRODUCTS, productsAPI, categoryAPI, FETCH_CATEGORIES} from '../constants';
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
            //console.log("in fetch Products");
            //console.log(res.data);
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
          //console.log(categories);
          if(callback){
            callback();
          }
          console.log("In product Actions");
          let finalTree = makeTree(categories);
          /*
          let finalCat = [];
          let idAttr = 'id';
          let parentAttr = 'parent';
          let childrenAttr = 'children';
          
          let lookup={};
          

          categories.forEach(cat => {
            //cat = Object.assign({toggled:false},cat);
            lookup[cat[idAttr]]=cat;
            cat[childrenAttr]=[];
            cat['toggled']=false;
          })
          //console.log(lookup);
          try{
          categories.forEach(obj => {
            if (obj[parentAttr] != null) {
              //console.log(obj[parentAttr]);
              //console.log(lookup[obj[parentAttr]]);
              let p = obj[parentAttr];
              let par = lookup[p];
              if(par){
                if(par.hasOwnProperty('children')){
                  lookup[p][childrenAttr].push(obj);
                }
                else{
                  lookup[p][childrenAttr] = [obj];
                }
              }
              else {
                finalCat.push(obj);
              } 
            } 
          })
        }catch(e){
          console.log(e);
        }*/
          console.log(finalTree);

          return dispatch({
            type: FETCH_CATEGORIES,
            payload: finalTree
          });
        })
        .catch(err => {
          console.log('Could not fetch products. Try again later.'+err);
        });
}