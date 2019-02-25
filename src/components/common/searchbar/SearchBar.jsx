import React from 'react'

const SearchBar =  () => {
  return (
    <div>
      <div className="input-group flex-nowrap cust-input-group">
        <div className="input-group-prepend">
          <span className="input-group-text fa fa-search"></span>
        </div>
        <input type="text" className="form-control" placeholder="Search item or keyword" />
      </div>
    </div>
  )
}

export default SearchBar;