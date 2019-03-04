import React, { PureComponent } from 'react'


//convert this into function component & Use memo

export default class Pagination extends PureComponent {
    constructor(props){
        super(props);
        // this.getPageResults = this.getPageResults.bind(this);
        this.renderPageResults = this.renderPageResults.bind(this);
    }

    renderPageResults(){
        // alert('renderPageResults');
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.isPageLinkClicked === this.props.isPageLinkClicked;
    }

    render() {
        let totalProds = parseInt(this.props && this.props.totalRecords);
        let pageSize = this.props.pageSize;
        let pageLinksNo = totalProds && Math.ceil(totalProds / 5);

        const pageNumbers = [];

        for(var i=0; i<pageLinksNo; i++){
            pageNumbers.push(i+1);
        }

        return (
        <div className="col-sm-12">
            <ul className="pagination-list">
                <li><a href="javascript:void()" className="link" >«</a></li>
                {
                    pageNumbers && pageNumbers.map((link, index)=>{
                        {
                            return(
                                <li><a href="#" className="link" onClick={(e) => this.props.renderPageResults(link-1, pageSize, "true")} key={index}>{link}</a></li>
                            )
                        }
                    })
                }
                <li><a href="javascript:void()">»</a></li>
            </ul>
        </div>
        )
    }
}