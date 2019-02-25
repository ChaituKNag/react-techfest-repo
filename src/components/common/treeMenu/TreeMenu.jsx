import React, { Component } from 'react'
import './TreeMenu.scss';

class TreeMenu extends Component {

  render() {
    let categories = this.props.categories;
    return (
      <div>
        {
          categories.map(item => {
            return (
              <ul key={item.id} aria-labelledby="treeheading" className="slds-tree" role="tree">  
                <li aria-level="1" role="treeitem" tabIndex="0">
                  <div className="slds-tree__item">
                    <button className="slds-button slds-button_icon slds-m-right_x-small"  aria-hidden="true" tabIndex="-1" title={item.name}>
                      <span className="slds-button__icon slds-button__icon_small fa fa-chevron-right"></span>
                    </button>
                    <span className="slds-has-flexi-truncate">
                      <span className="slds-tree__item-label slds-truncate" title={item.name}>{item.name}</span>
                    </span>
                  </div>
                </li>
                <ul role="group">
                  {
                    item.children.map(child => {
                    return (
                          <li key={child.id} aria-expanded="true" aria-level="2" role="treeitem">
                            <div className="slds-tree__item">
                              <button className="slds-button slds-button_icon slds-m-right_x-small" aria-hidden="true" tabIndex="-1" title="Expand Tree Item">
                                <span className="slds-button__icon slds-button__icon_small fa fa-chevron-right"></span>
                              </button>
                              <span className="slds-has-flexi-truncate">
                                <span className="slds-tree__item-label slds-truncate" title="Tree Item">{child.name}</span>
                              </span>
                            </div>
                            <ul role="group">
                            {
                              child.children && child.children.map(grand => {
                                return (
                                  <li key={grand.id} aria-level="3" aria-expanded="true" role="treeitem">
                                     <div className="slds-tree__item">
                                      <button className="slds-button slds-button_icon slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabIndex="-1" title="Expand Tree Item">
                                        <span className="slds-button__icon slds-button__icon_small fa fa-chevron-right"></span>
                                      </button>
                                      <span className="slds-has-flexi-truncate">
                                        <span className="slds-tree__item-label slds-truncate" title={grand.name}>{grand.name}</span>
                                      </span>
                                     </div>
                                  </li>
                                )
                              })
                            }
                            </ul>
                          </li>
                          )
                    })
                  }
                </ul>
              </ul>
            )
          })
        }
      </div>
    )
  }
}


export default  TreeMenu;