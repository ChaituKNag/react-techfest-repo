import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectPage } from '../../store/selectors'
import { charcoal, mustard, steel } from '../../styles/colors'
import { fontWeightLight, fontWeightBold, fontWeightMedium } from '../../styles/variables'
import { setPageNumber } from '../../store/actions/page'
import { updateProductsPageData } from '../../store/actions/product-list'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding-left: 4%;
  font-size: 14px;
  margin: 0 0 20px;
`

const PagingWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`
const ResultsCount = styled.div`
  color: ${steel};
`

const PageChange = styled.span`
  text-transform: uppercase;
  cursor: ${ props => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${ props => (props.disabled ? steel : charcoal)};
  font-weight: ${ props => (props.disabled ? fontWeightLight : fontWeightBold)};
  margin: 0 15px;
`

const PageNumber = styled.span`
  cursor: pointer;
  font-weight: ${ props => (props.currentPage ? fontWeightBold : fontWeightMedium)};;
  color: ${ props => (props.currentPage ? mustard : charcoal)};
  margin: 0 10px;
`

const Pagination = ({ count, itemsPerPage, page, setPageNumber, updateProductsPageData }) => {
  const totalPages = Math.ceil(count/itemsPerPage);
  const pages = Array.from(Array(totalPages).keys(), n => n + 1);

  const increasePage = () => {
    if(page < totalPages){
      page = page + 1;
      updateStore(page)
    }
  }
  const decreasePage = () => {
    if(page > 1){
      page = page - 1;
      updateStore(page)
    }
  }

  const updateStore = (page) => {
    setPageNumber(page);
    updateProductsPageData({offset: (page - 1) * itemsPerPage, limit: itemsPerPage})
  }

  return (
    <Wrapper>
      <ResultsCount>Showing { 1 + ((page - 1) * itemsPerPage)} to {itemsPerPage<count ? itemsPerPage * page : count * page} of {count} results</ResultsCount>
      {
        itemsPerPage < count && 
        <PagingWrapper>
          <PageChange disabled={page <= 1} onClick={decreasePage}>Prev</PageChange>
          {
            pages.map(pageNo => <PageNumber currentPage={page===pageNo} key={pageNo} onClick={() => updateStore(pageNo)}>{pageNo}</PageNumber>)
          }
          <PageChange disabled={page >= totalPages} onClick={increasePage}>Next</PageChange>
        </PagingWrapper>
      }
      
    </Wrapper>
  )
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number,
  setPageNumber: PropTypes.func,
  updateProductsPageData: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
  return ({
    page: selectPage(state),
    ...ownProps
  })
}

const mapDispatchToProps = {setPageNumber, updateProductsPageData}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
