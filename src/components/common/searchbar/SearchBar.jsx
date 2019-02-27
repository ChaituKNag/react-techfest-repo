import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      searchResults:[],
      searchOpen:false
    }
    this.searchData = this.searchData.bind(this);
    this.closeSearchBar = this.closeSearchBar.bind(this);
  }
  
  componentWillMount() {
    
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.closeSearchBar()
    }
  }

  

  closeSearchBar(){
    this.setState({searchOpen:false,searchResults:[]})
  }

  searchData(event) {
    console.log(event.target.value);
    let search = event.target.value;
    if(search.length){
    let searchResults =  _.filter(this.props.products.products, function (item) {
                            return (item.name.toUpperCase().indexOf(search.toUpperCase())>-1)
                          });
    this.setState({searchResults:searchResults,searchOpen:true});                      
                        }
                        else{
                          this.setState({searchResults:[],searchOpen:false});                      
                        }
  }

  render() {
    return (
      <div>
        <div className="slds-combobox_container">
          <div className={this.state.searchOpen?'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open':'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click'} aria-controls="primary-search-combobox-id-2" aria-expanded="false" aria-haspopup="listbox" role="combobox">

            <div className="input-group flex-nowrap cust-input-group">
              <div className="input-group-prepend">
                <span className="input-group-text fa fa-search"></span>
              </div>
              <input type="text" className="form-control" placeholder="Search item or keyword" onKeyUp={this.searchData} />
            </div>
            <div id="objectswitcher-listbox-id-2" className="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox">
              <ul className="slds-listbox slds-listbox_vertical" role="group" aria-label="Suggested for you">
                <li role="presentation" className="slds-listbox__item">
                  <div id="object0" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                    <h3 className="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                  </div>
                </li>
                { this.state.searchResults.map(item => {
                    return (
                      <li key={item.id} role="presentation" className="slds-listbox__item">
                      <div id="object1" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" >
                        <span className="slds-media__figure slds-listbox__option-icon">
                          <span className="slds-icon_container slds-icon-utility-check slds-current-color">
                            <img className="slds-icon slds-icon_medium" src={item.imageUrl} alt="Product Tile" />
                          </span>
                        </span>
                        <span className="slds-media__body">
                          <span className="slds-truncate" title="Accounts">
                            <Link to={'/product/'+item.id}>{item.name}</Link>
                        </span>
                        </span>
                      </div>
                    </li>
                    )
                })}

              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes= {
  products: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default SearchBar;