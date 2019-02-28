import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { fetchCategories } from '../../../store/actions/category'
import HeaderTag from '../base/HeaderTag'
import styled from 'styled-components'
import { media } from '../../../styles/variables'
import { connect } from 'react-redux'
import CategoryItem from './CategoryItem'

export const Wrapper = styled.div`
  background-color: white;
  padding: 30px 25px;
  -webkit-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
  -moz-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
  box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
  margin-top: 10px;

h5{
  font-weight:bold;
  margin-bottom: 20px;
}

ul{
  list-style-type: none;
  padding-left: 30px;
  margin-left: -7px;
}

li{
  margin-top: 10px;
}

h5 + ul{
  padding-left: 0;
  margin-left: -7px;
}

${media.tablet`padding: 30px;`} ${media.mobile`padding: 20px 15px;`};
`

class Categories extends PureComponent {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { data } = this.props.categories
    return (
      <Wrapper>
        <div>
          <HeaderTag as='h5'>CATEGORIES</HeaderTag>
          <ul>
            {data.length && data.map((value) => (
              <CategoryItem key={value.id} value={value} />
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

const mapStateToProps = (state) => ({ categories: state.category, selectedCategory: state.selected })

const mapDispatchToProps = { fetchCategories }

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
