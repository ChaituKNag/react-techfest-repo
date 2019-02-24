import React, {Component} from 'react';
import { getAllCategories } from '../../services/fetch-category';
import PropTypes from 'prop-types'

import styled from 'styled-components';
import { media } from '../../styles/variables';
import { whiteGray } from '../../styles/colors';

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
const Li = styled.li`
font-size: 12px;
`

export class Categories extends Component {

  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {

    getAllCategories().then(response => {
      const data = response.data        
      const newData = data.filter(value => value.parent === 0).map(value => ({id: value.id, name: value.name, childrens: []}) )

      for(let x of data){
        let pId = x.parent
        if(pId){
          for(let i = 0; i< newData.length; i++){
            if(newData[i].id === pId){
              newData[i].childrens.push(x)
            }
          }
        }
      }

      this.setState(() => ({
        data: newData
      }))
    })
  }

    render(){
      return (
        <Wrapper>
          <div>
          <P>CATEGORIES</P>
            <ul>
              {this.state.data.map(value => (
                <CategoryItem key={value.id} value={value}/>
              ))}
            </ul>
          </div>
        </Wrapper>
        )
    }
}

export class CategoryItem extends Component {

  static propTypes = {
    value: PropTypes.shape({
      id: PropTypes.number,
      names: PropTypes.string,
      childrens: PropTypes.array
    })
  }

  constructor(props){
    super()
    this.state = {
      value: {...props.value, expanded: true},
    }
  }

  onItemClick (event, id)  {
    //DIspatch action to update Products
    this.setState(state => ({
      value: {...state.value, expanded: !state.value.expanded}
    }))
  }

  render() {
    const value = this.state.value

    return (
      <div>
      <Li  key={value.id} onClick={(event) => {this.onItemClick(event, value.expanded)}}>
        {value.name}
      </Li>
        {value.childrens.length && value.expanded !== false && (
          <Li>
          <ul>
            {value.childrens.map(value => (
              <Li key={value.id}>{value.name}</Li>
            ))}
          </ul>
        </Li>
        )}
      </div>
    )
  }
}