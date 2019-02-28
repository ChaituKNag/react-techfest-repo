import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { aluminium, steel, charcoal, white, fontblack } from '../../../styles/colors'
import { setSearch } from '../../../store/actions/search'
import { getSearchResults } from '../../../store/actions/search-results'
import Autocomplete from 'react-autocomplete'
import { selectSearchText, selectSearchResults } from '../../../store/selectors'

const SearchBox = styled.div`
  color: ${aluminium};
  position: relative;
  .icon {
    left: 15px;
    position: absolute;
    top: 9px;
  }
`

const SearchField = styled.input`
  background: transparent;
  border-radius: 5px;
  border: 1px solid ${steel};
  color: ${aluminium};
  outline: none;
  padding: 9px 20px 10px 40px;
  width: 100%;
  margin-top: 1px;
  &::focus{
    outline: none;
  }
  &::placeholder{
    color: ${aluminium};
  }
`

const SearchWrapper = styled.div`
  flex-grow: 1.5;
  > * {
    margin-left: 50px; 
    width: calc( 100% - 50px);
  }
`

const ItemResult = styled.div`
  padding: 10px;
`

const InputComponent  = inputProps  => (
  <SearchBox>
    <span className="icon icon-search"></span>
    <SearchField {...inputProps} placeholder="Search item or keyword"/>
  </SearchBox>
)

const Item = (item, highlighted) =>(
  <ItemResult
    key={item.id}
    style={{ backgroundColor: highlighted ? fontblack : 'transparent'}}
  >
    {item.name}
  </ItemResult>
)


const Search = ({search, setSearch, searchResults, getSearchResults, history}) => {
  const onChangeSearch = (e) => {
    const val = e.target.value
    setSearch(val)
    getSearchResults(val)
  }

  const onSelect = (item) => {
    window.location.replace(`/product/${item.id}`)
  }

  const menuStyle = {
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: charcoal,
    color: white,
    padding: '0',
    fontSize: '90%',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: '100%'
  }

  return (
    <SearchWrapper>
      <Autocomplete
        items={searchResults.list}
        getItemValue={item => item.name}
        renderItem={Item}
        value={search}
        menuStyle={menuStyle}
        renderInput={InputComponent}
        onChange={(e) => onChangeSearch(e)}
        onSelect={(val, item) => onSelect(item)}
      />
    </SearchWrapper>
  )
}


Search.propTypes = {
  search : PropTypes.string,
  setSearch: PropTypes.func,
  searchResults: PropTypes.shape({
    list: PropTypes.array,
    fetchError: PropTypes.object,
    loading: PropTypes.bool
  }),
  getSearchResults: PropTypes.func
}

const mapStateToProps = (state) => {
  return ({
    search: selectSearchText(state),
    searchResults: selectSearchResults(state)
  })
}

export default connect(
  mapStateToProps,
  {
    setSearch,
    getSearchResults
  }
)(withRouter(Search))

