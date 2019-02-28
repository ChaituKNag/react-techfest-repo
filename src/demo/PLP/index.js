import React, {Component} from 'react';
import axios from 'axios';

import ProductCardComponent from './ProductCardComponent';
import CategoryComponent from './CategoryComponent';
import endPointUrl from '../../AppConsts/EndpointUrls.js';

import './index.scss';


export default class PLPComponent extends Component{

    constructor(){
        super();
        this.state={
            productList:[],
            displayList:[]
        }
        this.p1=1;
    
        this.pageLength=12;
        this.minPrev=0;
        this.maxNext=0;

        this.updatesOnPaginationNumber=(pageNo)=>{
            let tempList=[];
            const pageStart = this.pageLength*(pageNo-1),
                  pageEnd   = pageStart+this.pageLength;

            tempList = this.state.productList.slice(pageStart,pageEnd);

            this.setState(
                {
                    displayList:tempList   
                }
            )
        }

        this.updatesPagniation=(paginationMovement)=>{
            
                this.p1+=paginationMovement;
                console.log(this.p1);
                this.updatesOnPaginationNumber(this.p1);

        }
    }

    componentWillMount(){

        axios.get(endPointUrl.productsList)
            .then(response => {
                console.log('response-->',response);
                this.setState({
                    productList: response.data
                });
                
                this.minPrev = this.state.productList.length>12?1:0;
                this.maxNext = Math.ceil(this.state.productList.length/this.pageLength);

                this.updatesOnPaginationNumber(1);
            })
            .catch(
                error => {
                    throw(error);
                }
            )

    }
    

    render(){
        return(
        <div>
            <div className="banner-container">
                <div className="banner-content">
                    <div className="banner-hd-1">REPUBLIC DAY SALE</div>
                    <div className="banner-hd-2">Upto 60% Off*</div>
                    <div className="banner-hd-3">Google Home and Google Home Mini</div>
                    <button className="primary-button">EXPLORE</button>
                </div>
            </div>
            {/* <div>
                    <CategoryComponent productList={this.state.productList}/>
                </div> */}
                {
                    this.state.displayList.map((product,i)=>{
                        return (
                            <ProductCardComponent product={product} key={i}/>
                        )
                    })
                }

              { (this.p1)&& 
              <div>
                    <span onClick={()=>{this.p1>1&&this.updatesPagniation(-1)}}>Prev</span>
                    <span onClick={()=>{this.updatesOnPaginationNumber(this.p1)}}>{this.p1}</span>
                    {((this.p1+1)<=this.maxNext)&&<span onClick={()=>{this.updatesOnPaginationNumber(this.p1+1)}}>{this.p1+1}</span>}
                    {((this.p1+2)<=this.maxNext)&&<span onClick={()=>{this.updatesOnPaginationNumber(this.p1+2)}}>{this.p1+2}</span>}
                    <span onClick={()=>{(this.p1+2)<this.maxNext&&this.updatesPagniation(1)}}>next</span>
                </div>
            }
            </div>
           
            )
    }
}