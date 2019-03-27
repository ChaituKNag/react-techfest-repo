import React, { Component } from 'react'


//convert this into function component & Use memo

export default class Pagination extends Component {
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.rerenderPagination === "true"){
            return true;
        }else{
            return false;
        }
    }

    render() {
        let pageNumbers = this.props.paginationLinks;

        return (
        <div className="col-sm-12">
        {this.props.rerenderPagination}
            <ul className="pagination-list">
                {/* <li><a href="javascript:void()" className="link" onClick={(e) => this.props.renderPageResults("left", this.props.pageSize-1)}>«</a></li> */}
                {
                    pageNumbers && pageNumbers.map((link, index)=>{
                        {
                            return(
                                <li><a href="javascript:void(0)" key={index} className="link" key={index} onClick={(e) => this.props.renderPageResults(link-1, this.props.pageSize)}>{link} </a></li>
                            )
                        }
                    })
                }
                {/* <li><a href="javascript:void()" onClick={(e) => this.props.renderPageResults("right", this.props.pageSize+1)}>»</a></li> */}
            </ul>
        </div>
        )
    }
}