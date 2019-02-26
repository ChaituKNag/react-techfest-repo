import React, {PureComponent} from 'react'
import styled from 'styled-components';
import { updateSelectedCategory, expandCategory } from "../../../store/actions/category";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ListItem = styled.li`
font-size: 12px;
`

class CategoryItem extends PureComponent {

  render(){
    const {value} = this.props

    return (
      <div>
        <ListItem onClick={() => this.props.expandCategory(value)}>{value.name}</ListItem>
          {value.childrens.length && value.expanded !== false && (
          <ListItem>
          <ul>
            {value.childrens.map(value => (
              <ListItem key={value.id}  onClick={() => this.props.updateSelectedCategory(value)}>{value.name}</ListItem>
            ))}
          </ul>
          </ListItem>
        )}
    </div>
    )
  }
}

CategoryItem.propTypes = {
  value: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    expanded: PropTypes.bool,
    childrens: PropTypes.array
  }),
  expandCategory: PropTypes.func,
  updateSelectedCategory: PropTypes.func
}

const mapStateToProps = () => ({})

const mapDispatchToProps = { updateSelectedCategory,  expandCategory}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
