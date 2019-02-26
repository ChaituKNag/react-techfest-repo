import React, {Component} from 'react';
import ProductCardComponent from './ProductCardComponent';
import axios from 'axios';
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
        this.p2=2;
        this.p3=3;
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
            if(paginationMovement.toLowerCase()==='next' && this.p3<=this.maxNext){
                this.p1+=1;
                this.p2+=1;
                this.p3+=1;

                this.updatesOnPaginationNumber(this.p1);

                return
               
            }

            if(paginationMovement.toLowerCase()==='prev' && this.p1>=this.minPrev){
                this.p1-=1;
                this.p2-=1;
                this.p3-=1;

                this.updatesOnPaginationNumber(this.p1);

                return
            }

           

        }
    }

    componentDidMount(){

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
        let productsList=[];
        for(let i=0; i<this.state.displayList.length;i++){
            productsList.push(
                <ProductCardComponent product={this.state.displayList[i]} key={i}/>)
        }

        return(
        <div>
            <div className="banner-container">
                <div className="banner-content">
                    <div className="banner-hd-1">REPUBLIC DAY SALE</div>
                    <div className="banner-hd-2">Upto 60% Off*</div>
                    <div className="banner-hd-3">Google Home and Google Home Mini</div>
                    <button type="button" className="explore-button">EXPLORE</button>
                </div>
            </div>
            {productsList}


              { (this.p1)&& 
              <div>
                    <span onClick={()=>{this.p1>1&&this.updatesPagniation('prev')}}>Prev</span>
                    <span onClick={()=>{this.updatesOnPaginationNumber(this.p1)}}>{this.p1}</span>
                    {(this.p2<=this.maxNext)&&<span onClick={()=>{this.updatesOnPaginationNumber(this.p2)}}>{this.p2}</span>}
                    {(this.p3<=this.maxNext)&&<span onClick={()=>{this.updatesOnPaginationNumber(this.p3)}}>{this.p3}</span>}
                    <span onClick={()=>{this.p3<this.maxNext&&this.updatesPagniation('next')}}>next</span>
                </div>
            }
            </div>
           
            )
    }
}