import React, { Component } from 'react';

import './index.scss';

export default class CategoryComponent extends Component{

    constructor(){
        super();

        this.newNode=()=>{
           return{
               children:{},
               content:{}
           }
        }

        this.formCategoryStructure=(pList)=>{
            let objDepthFormation=[];
            pList.map((product,index)=>{
                let i = product.category.parent;
               while(i--){
                    console.log(i);
               }
            
            })

        }
        
    }
    
    render(){
        this.formCategoryStructure(this.props.productList);
        return(
            <div>
                    CategoryComponent
                </div>
        )
    }
}