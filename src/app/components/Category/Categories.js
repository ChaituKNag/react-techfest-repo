import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import { fetchCategories } from "../../../store/actions/category";

import styled from 'styled-components';
import { media } from '../../../styles/variables';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem'

export const Wrapper = styled.div`
background-color: white;
padding: 10px 20px;
width:  250px;
-webkit-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
-moz-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
margin-top: 10px;

${media.tablet`padding: 30px;`} ${media.mobile`padding: 20px 15px;`};
`
const P = styled.p`
font-size: 14px;
`
 class Categories extends PureComponent {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const {data} = this.props.categories
    return (
      <Wrapper>
        <div>
          <P>CATEGORIES</P>
            <ul>
              {data.length && data.map((value, index) => (
                <CategoryItem key={value.id} value={value} index={index}/>
              ))}
            </ul>
        </div>
      </Wrapper>
    )
  }
}

Categories.propTypes = {
  categories: PropTypes.shape({
    data: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.object
  }),
  fetchCategories: PropTypes.func
}

const mapStateToProps = (state) => ({categories: state.category, selectedCategory: state.selected})

const mapDispatchToProps = { fetchCategories }

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
