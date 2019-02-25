import React, { Component } from 'react';
import { Treebeard } from 'react-treebeard';
import Banner from '../../components/common/banner/Banner';
// import { CategoryMenu } from '../categoryMenu/CategoryMenu';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories, fetchProducts } from '../../store/actions/productAction';
import ProductTile from '../../components/common/productTile/ProductTile';
import JwPagination from 'jw-react-pagination';
import './PlpContainer.scss';
import TreeMenu from '../../components/common/treeMenu/TreeMenu';

class ProductListContainer extends Component {
constructor(props) {
  super(props);
  this.state = {
    categories: [],
    pageOfItems: []
  };
  this.onChangePage = this.onChangePage.bind(this);
}

  

  componentDidMount() {
    console.log(this.props);
    this.getCategories();
    this.getProducts();
  }

  getCategories() {
    this.props.fetchCategories(() => {
    });
  }

  getProducts() {
    this.props.fetchProducts(() => {
    });
  }

  onChangePage(pageOfItems) {
    // update local state with new page of items
    this.setState({ pageOfItems });
  }

  onToggle(node, toggled) {
    if (this.state.cursor) { this.state.cursor.active = false; }
    node.active = true;
    if (node.children) { node.toggled = toggled; }
    this.setState({ cursor: node });
  }


  render() {

    const categories = this.state.categories;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="my-4">
              <Banner />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3 pr-4">
            <article className="slds-card">
              <div className="slds-card__header slds-grid">
                <h2 className="slds-card__header-title">CATEGORIES</h2>
              </div>
              <div className="slds-card__body slds-card__body_inner">
                {/* <Treebeard
                  data={categories}
                  onToggle={this.onToggle}
                /> */}
               
                <TreeMenu categories={this.props.categories} ></TreeMenu> 
               
              </div>
            </article>
          </div>
          <div className="col">

            <div className="row">
              {
                // this.props.products.map(prod => {
                //   return <div className="col-md-4 col-sm-6 col-xs-12 mb-3"><ProductTile product={prod} /></div>
                // })
                this.state.pageOfItems.map(item => {
                  return <div key={item.id} className="col-md-4 col-sm-6 col-xs-12 mb-3"><ProductTile product={item} /></div>;
                })
              }
              <JwPagination items={this.props.products} pageSize={12} onChangePage={this.onChangePage} />
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col">
            <br /><br />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.product.categories,
  products: state.product.products
})

ProductListContainer.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { fetchCategories, fetchProducts })(ProductListContainer)


