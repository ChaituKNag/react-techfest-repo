import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectPage } from '../../../store/selectors'
import { aluminium, charcoal, mustard } from '../../../styles/colors';
import { fontWeightLight, fontWeightBold, fontWeightMedium } from '../../../styles/variables';
import { setPageNumber } from '../../../store/actions/page';

const Wrapper = styled.div`
  display: flex;
`

const PagingWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`
const ResultsCount = styled.div`
  color: ${aluminium};
`

const PageChange = styled.span`
  text-transform: uppercase;
  cursor: ${ props => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${ props => (props.disabled ? aluminium : charcoal)};
  font-weight: ${ props => (props.disabled ? fontWeightLight : fontWeightBold)};
  margin: 0 15px;
`

const PageNumber = styled.span`
  cursor: pointer;
  font-weight: ${fontWeightMedium};
  color: ${ props => (props.currentPage ? mustard : charcoal)};
  margin: 0 10px;
`

const Pagination = ({ count, itemsPerPage, page, setPageNumber }) => {
  const totalPages = Math.ceil(count/itemsPerPage);
  const pages = Array.from(Array(totalPages).keys(), n => n + 1);

  const increasePage = () => {
    if(page < totalPages){
      page = page + 1;
      setPageNumber(page);
    }
  }
  const decreasePage = () => {
    if(page > 1){
      page = page - 1;
      setPageNumber(page);
    }
  }

  return (
    <Wrapper>
      <ResultsCount>Showing { 1 + ((page - 1) * itemsPerPage)} to {itemsPerPage * page} of {count} results</ResultsCount>
      <PagingWrapper>
        <PageChange disabled={page <= 1} onClick={decreasePage}>Prev</PageChange>
        {
          pages.map(pageNo => <PageNumber currentPage={page===pageNo} key={pageNo} onClick={() => setPageNumber(pageNo)}>{pageNo}</PageNumber>)
        }
        <PageChange disabled={page >= totalPages} onClick={increasePage}>Next</PageChange>
      </PagingWrapper>
    </Wrapper>
  )
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number,
  setPageNumber: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
  return ({
    page: selectPage(state),
    ...ownProps
  })
} 

  
export default connect(
  mapStateToProps,
  {
    setPageNumber
  }
)(Pagination)
