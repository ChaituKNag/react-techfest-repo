import React from 'react';
import styled from 'styled-components';
import { aluminium, platinum } from '../../../styles/colors';

const SearchBox = styled.div`
  color: ${aluminium};
  margin-left: 50px; 
  position: relative;
  flex-grow: 1.5;
  .icon {
    left: 20px;
    position: absolute;
    top: 20px;
  }
`

const SearchField = styled.input`
  background: transparent;
  border-radius: 5px;
  border: 1px solid ${platinum};
  color: ${aluminium};
  outline: none;
  padding: 20px 25px 20px 50px;
  width: 100%;
  &: focus{
    outline: none;
  }
`

const Search = () => (
  <SearchBox>
    <span className="icon icon-search"></span>
    <SearchField type="text" placeholder="Search item or keyword" />
  </SearchBox>
)

export default Search

