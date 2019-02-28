import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { updateSelectedCategory, expandCategory } from '../../../store/actions/category'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { mustard, black } from "../../../styles/colors";
import { fontWeightBold, fontWeightMedium } from '../../../styles/variables'

const ListItem = styled.li`
  font-size: 12px;
  .icon.icon-right-dir,
  .icon.icon-down-dir{
    font-size: 20px;
    position: relative;
    top: 1px;
  }
  .l1, .l2{
    font-size: 16px;
    cursor: pointer;
  }
  .l2 + ul{
    padding-left: 50px;
  }
  .l3{
    font-size: 14px;
    cursor: pointer;
  }
`
const BulletIcon = styled.span`
color: ${props => props.expanded === true ? mustard : black};
`
const ListLabel = styled.span`
font-weight: ${props => props.bold === true ? fontWeightBold : fontWeightMedium};
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
    const icon = (expanded) => {
      return `icon icon-${expanded ? 'down' : 'right'}-dir`
    }
    return (
      <div>
        <ListItem onClick={(event) => this.onCategoryClick(event, value, false)}>
          {value.childrens.length > 0 && <BulletIcon className={icon(value.expanded)} expanded={value.expanded}/>}
          <ListLabel bold={value.expanded && value.childrens.length > 0} className="l1">{value.name}</ListLabel>
          {value.childrens.length > 0 && value.expanded !== false && (
            <ul>
              {value.childrens.map(l2 => (
                <ListItem key={l2.id} onClick={(event) => this.onCategoryClick(event, l2, false)}>
                {l2.childrens.length > 0 && (<BulletIcon className={icon(l2.expanded)} expanded={l2.expanded}/>) }
                  <ListLabel bold={l2.expanded && l2.childrens.length > 0} className="l2" >{l2.name}</ListLabel>
                  {l2.expanded !== false && l2.childrens && (
                    <ul>
                      {l2.childrens.map(l3 => (
                        <ListItem key={l3.id} onClick={(event) => this.onCategoryClick(event, l3, true)}>
                          <span className="l3">{l3.name}</span>
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
