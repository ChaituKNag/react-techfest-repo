import React, {PureComponent} from 'react'
import  { connect } from 'react-redux'
import styled from "styled-components";
import PropTypes from "prop-types";

import ProductCard from './ProductCard';
import Pagination from "../Pagination";
import  { fetchProducts } from '../../../store/actions/productlist'
import { PAGINATION_LIMIT } from '../../../constants/config'
import { Link } from 'react-router-dom'

const ProductsList = styled.div`
  display: flex;
`
class Products extends PureComponent {

  componentDidMount() {
    const { selectedCategory, fetchProducts } = this.props
    fetchProducts(selectedCategory)
  }

  render() {
    const { products } = this.props

    const data = products.data
    .filter(product => products.selectedCategory === null || (products.selectedCategory !== null &&  product.categoryId ===  products.selectedCategory))
    
    const paginatedData = data.slice(products.offset,
      !products.limit? products.data.length : 
      (products.limit + products.offset)
      )

    return  (
      <div>
        <ProductsList>
          { paginatedData.filter(product => product.inStock).map((product) => (
            <Link key={product.id} to={'/product/' + product.id}>
            <ProductCard key={product.id} name={product.name} rating={product.rating} numberOfRaters={140} bestSelling={true} imageUrl={product.imageUrl}/>
            </Link>
          ))}
          {paginatedData.filter(product => !product.inStock).map((product) => (
            <ProductCard outOfStock={true} key={product.id} name={product.name} rating={product.rating} numberOfRaters={140} bestSelling={true} imageUrl={product.imageUrl}/>
          ))}
          {!data.length && (
            <p>No Products found for selected category.</p>
          )}
          <Pagination count={data.length} itemsPerPage={PAGINATION_LIMIT} />
        </ProductsList>
      </div>
    )
  }
}

Products.propTypes = {
  products: PropTypes.shape({
    data: PropTypes.array,
    loading: PropTypes.bool,
    fetchError: PropTypes.bool
  }),
  selectedCategory: PropTypes.number,
  fetchProducts: PropTypes.func
}

const mapStateToProps = (state) => ({products: state.productslist, selectedCategory: state.category.selected})

const mapDispatchToProps = {fetchProducts}

export default connect(mapStateToProps, mapDispatchToProps)(Products)