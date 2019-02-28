import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"
import PropTypes from "prop-types"

import ProductCard from './ProductCard'
import Pagination from "../Pagination"
import { fetchProducts } from '../../../store/actions/product-list'
import { PAGINATION_LIMIT } from '../../../constants/config'
import { Link } from 'react-router-dom'

const ProductsList = styled.div`
  display: flex;
  padding: 0;
  margin-left: 1%;
  margin-top: 3%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;

  > a{
    display:flex;
    flex-basis: 30.33%;
    padding-left: 3%;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;
  }

  > div{
    display:flex;
    flex-direction: column;
    flex-basis: 30.33%;
    margin-left: 3%;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;
  }

  > div > span{
    width: 70px;
  }
`

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

class Products extends PureComponent {

  componentDidMount() {
    const { selectedCategory, fetchProducts } = this.props
    fetchProducts(selectedCategory)
  }

  render() {
    const { products } = this.props

    const data = products.data
      .filter(product => products.selectedCategory === null || (products.selectedCategory !== null && product.categoryId === products.selectedCategory))

    const paginatedData = data.slice(products.offset,
      !products.limit ? products.data.length :
        (products.limit + products.offset)
    )

    return (
      <ProductsWrapper>
        <ProductsList>
          {paginatedData.filter(product => product.inStock).map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard key={product.id} name={product.name} rating={product.rating} numberOfRaters={140} bestSelling imageUrl={product.imageUrl} />
            </Link>
          ))}
          {paginatedData.filter(product => !product.inStock).map((product) => (
            <ProductCard outOfStock key={product.id} name={product.name} rating={product.rating} numberOfRaters={140} bestSelling imageUrl={product.imageUrl} />
          ))}
          {!data.length && (
            <p>No Products found for selected category.</p>
          )}
        </ProductsList>
        <Pagination count={data.length} itemsPerPage={PAGINATION_LIMIT} />
      </ProductsWrapper>
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

const mapStateToProps = (state) => ({ products: state.productList, selectedCategory: state.category.selected })

const mapDispatchToProps = { fetchProducts }

export default connect(mapStateToProps, mapDispatchToProps)(Products)