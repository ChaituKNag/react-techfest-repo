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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="product-grid">
        <Row>
          {this.props.productsList.length > 0 ? (
            this.props.productsList.map(product => (
              <Col md={4} key={product.id}>
                <CardComponent {...product} />
              </Col>
            ))
          ) : (
            <p>Loading productsList...</p>
          )}
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
        </Row>
      </section>
    );
  }
}

export default GridComponent;
