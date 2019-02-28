import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchCategories} from '../../store/actions/productAction';


export class CategoryMenu extends Component {

  constructor(props) {
    super(props);
    
  }
  

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories
})
CategoryMenu.propTypes = {
  fetchCategories: PropTypes.func
};

export default connect(mapStateToProps, {fetchCategories})(CategoryMenu)


