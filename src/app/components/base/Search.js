import React from 'react';
import styled from 'styled-components';
import { aluminium, steel } from '../../../styles/colors';
import { setSearch } from '../../../store/actions/search';

const SearchBox = styled.div`
  color: ${aluminium};
  margin-left: 50px; 
  position: relative;
  flex-grow: 1.5;
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
  padding: 8px 20px 8px 40px;
  width: 100%;
  margin-top: 2px;
  &::focus{
    outline: none;
  }
  &::placeholder{
    color: ${aluminium};
  }
`

const Search = () => {

  return (
    <SearchBox>
      <span className="icon icon-search"></span>
      <SearchField type="text" placeholder="Search item or keyword" onChange={ (e) => setSearch(e.target.value) } />
    </SearchBox>
  )
}

export default Search

