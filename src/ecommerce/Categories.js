import React, { Component } from 'react'

export default class Categories extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    
  }

  render() {
    let categories = this.props.categories;

    return (
      <div className="col-sm-3">
        <h2 className="title">CATEGORIES</h2>
      {
        categories && categories.length > 0 && Object.keys(categories[0]).map((key) => {
        return(
          <div className="test" key={key}>
              <h4 className="category-heading">Category {key}</h4>
              {
                categories[0][key].map((list) => {
                  return(
                    <p className="category-name ml-4" key={list.id} data-category-id={list.id} onClick={(e) => this.props.filterProductsByCategory(list.id, e)}>{list.name}</p>
                  )
                })
              }
          </div>
        )
      })
      }
      </div>
    )
  }
}
