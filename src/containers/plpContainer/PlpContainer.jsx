/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from 'react';
import Banner from '../../components/common/banner/Banner';
// import { CategoryMenu } from '../categoryMenu/CategoryMenu';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories, fetchProducts } from '../../store/actions/productAction';
import ProductTile from '../../components/common/productTile/ProductTile';
import JwPagination from 'jw-react-pagination';
import './PlpContainer.scss';
import TreeMenu from '../../components/common/treeMenu/TreeMenu';
import ProductList from '../../components/common/productList/ProductList';

class ProductListContainer extends Component {
constructor(props) {
  super(props);
  this.state = {
    categories: [],
    pageOfItems: [],
    filterCategory:'',
    filteredProduct:[],
    listCard:true
  };

  this.onChangePage = this.onChangePage.bind(this);
  this.onFilterChange = this.onFilterChange.bind(this);
  this.setTiles = this.setTiles.bind(this);
  this.setList =this.setList.bind(this);
}

  

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.products !== nextProps.products){
      this.setState({products:nextProps.products});
    }
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

  categorySelected(data){
    let filtered = [];
    for (let i = 0; i < this.props.products.length; i++) {
      if(this.props.products[i].category.name===data.name){
        filtered.push(this.props.products[i]);
      }
    }

    this.setState({products: filtered,filterCategory:data.name})
  }

  onFilterChange(){
    this.setState({filterCategory:'',products:this.props.products});
  }

  setTiles(){
    this.setState({listCard:true})
  }

  setList(){
    this.setState({listCard:false})
  }

  render() {
    const filterCategory = this.state.filterCategory;
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
                <TreeMenu categories={this.props.categories}  itemSelected={(data) => this.categorySelected(data)} ></TreeMenu> 
              </div>
            </article>
          </div>
          <div className="col">
            <div className="row pb-2">
              <div className="col-3">
                    {
                    this.state.filterCategory?(
                      <span className="slds-pill slds-pill_link">
                        <a className="slds-pill__action" title={this.state.filterCategory}>
                          <span className="slds-pill__label">{filterCategory}</span>
                        </a>
                        <button className="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="remove" onClick={this.onFilterChange}>
                          <span className="slds-button__icon fa fa-close"></span>
                        </button>
                      </span>
                     ):''
                     }
              </div>
              <div className="col">
                    <div className="pull-right">
                     <span className={this.state.listCard?'fa fa-th p-1 is-active':'fa fa-th p-1'} onClick={this.setTiles}></span>
                     <span className={!this.state.listCard?'fa fa-list p-1 is-active':'fa fa-list p-1'} onClick={this.setList}></span>
                     </div> 
              </div>
            </div>
            <div className="row">
              {
                  this.state.pageOfItems.map(item => {  
                  return this.state.listCard?(<div key={item.id} className="col-md-4 col-sm-6 col-xs-12 mb-3"><ProductTile {...this.props} product={item} /></div>):(<div key={item.id} className="col-12 mb-3"><ProductList {...this.props} product={item} /></div>)
                })
              }
              <JwPagination items={this.state.products} pageSize={12} onChangePage={this.onChangePage} />
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
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { fetchCategories, fetchProducts })(ProductListContainer)


