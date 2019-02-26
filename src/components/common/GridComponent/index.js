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

class GridComponent extends React.Component {
  render() {
    const { listView, isCart, productsList } = this.props;
    return (
      <section className={`product-grid ${listView ? 'list-view': ''}`}>
        <Row>
          {productsList.length > 0 ? (
            productsList.map(product => 
              <Col md={listView ? 12 : 4} key={product.id}>
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
