import React from 'react';
import styled from 'styled-components';
import { aluminium, platinum } from '../../../styles/colors';
import { setSearch } from '../../../store/actions/search';

const SearchBox = styled.div`
  color: ${aluminium};
  margin-left: 50px; 
  position: relative;
  flex-grow: 1.5;
  .icon {
    left: 15px;
    position: absolute;
    top: 12px;
  }
`

const SearchField = styled.input`
  background: transparent;
  border-radius: 5px;
  border: 1px solid ${platinum};
  color: ${aluminium};
  outline: none;
  padding: 12px 20px 12px 40px;
  width: 100%;
  &: focus{
    outline: none;
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

