import React from "react";
import CardComponent from "../CardComponent";
import {
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

import "./index.scss";
import Icon from "../Icon";

class GridComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: 'active',
      list: ''
    }
  }
  gridView() {
    this.setState({
      grid: 'active',
      list: ''
    })
  }
  listView() {
    this.setState({
      grid: '',
      list: 'active'
    })
  }
  render() {
    const { listView, isCart, productsList } = this.props;
    return (
      <section className={`product-grid ${listView || this.state.list==='active' ? 'list-view': ''}`}>
        <Row>
          {!isCart ? 
          <Col md={12}>
            <section className="grid-header">
              <p className="title">Products</p>
              <ul className="list-inline view">
                <li className="list-inline-item" onClick={this.gridView.bind(this)}><Icon iconName="th" iconType="solid" className={`grid ${this.state.grid}`}></Icon></li>
                <li className="list-inline-item" onClick={this.listView.bind(this)}><Icon iconName="list" iconType="solid" className={`list ${this.state.list}`}></Icon></li>
              </ul>
            </section>
          </Col>
           : null }
          {productsList.length > 0 ? (
            productsList.map(product => 
              <Col md={listView || this.state.list==='active' ? 12 : 4} key={product.id}>
                <CardComponent {...product} />
              </Col>
            ))
           : 
            <p>Loading productsList...</p>
          }
          {!isCart ? 
          <Col md={12}>
            <Pagination aria-label="Page navigation example">
              <PaginationItem disabled>
                <PaginationLink first="true" href="#" />
              </PaginationItem>
              <PaginationItem disabled>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last="true" href="#" />
              </PaginationItem>
            </Pagination>
          </Col>
          : null}
        </Row>
      </section>
    );
  }
}

export default GridComponent;
