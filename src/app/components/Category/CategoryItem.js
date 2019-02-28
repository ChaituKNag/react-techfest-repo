import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { updateSelectedCategory, expandCategory } from '../../../store/actions/category'
import { connect } from "react-redux"
import PropTypes from "prop-types"

const ListItem = styled.li`
font-size: 12px;
`

class CategoryItem extends PureComponent {

  onCategoryClick = (event, category, isL3) => {
    event.stopPropagation()
    if (!isL3) {
      this.props.expandCategory(category)
    }
    this.props.updateSelectedCategory(category.id)
  }

  render() {
    const { value } = this.props
    return (
      <div>
        <ListItem onClick={(event) => this.onCategoryClick(event, value, false)}>{value.name}
          {value.childrens.length && value.expanded !== false && (
            <ul>
              {value.childrens.map(l2 => (
                <ListItem key={l2.id} onClick={(event) => this.onCategoryClick(event, l2, false)}>
                  {l2.name}
                  {l2.expanded !== false && l2.childrens && (
                    <ul>
                      {l2.childrens.map(l3 => (
                        <ListItem key={l3.id} onClick={(event) => this.onCategoryClick(event, l3, true)}>
                          {l3.name}
                        </ListItem>
                      ))}
                    </ul>
                  )}
                </ListItem>
              )
              )}
            </ul>
          )}
        </ListItem>
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
  index: PropTypes.number,
  expandCategory: PropTypes.func,
  updateSelectedCategory: PropTypes.func
}

const mapStateToProps = () => ({})

const mapDispatchToProps = { updateSelectedCategory, expandCategory }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
