import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TreeMenu.scss';

class TreeMenu extends Component {

  constructor(props) {
    super(props);
    this.toggleTree = this.toggleTree.bind(this);
    this.itemClicked = this.itemClicked.bind(this);
  }
  


  toggleTree(event){
    event.stopPropagation();
    let element = event.currentTarget;
    if(element){
      if(element.getAttribute('aria-expanded') === 'true'){
        element.setAttribute('aria-expanded',"false");
        let parentEL = element.parentElement;
        let el = parentEL.querySelector('ul')
        if(el){
          el.classList.toggle('slds-hide');
        }
      }
      else{
        element.setAttribute('aria-expanded',"true");
        let parentEL = element.parentElement;
        let el = parentEL.querySelector('ul')
        if(el){
          el.classList.toggle('slds-hide');
        }
      }
    }
  }

  itemClicked(obj){
    this.props.itemSelected(obj);
  }

  render() {
    let categories = this.props.categories;
    return (
      <div>
        {
          categories.map(item => {
            return (
              <ul key={item.id} aria-labelledby="treeheading" className="slds-tree" role="tree">  
                <li aria-level="1" aria-expanded="true" role="treeitem" tabIndex="0" onClick={this.toggleTree} >
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
                          <li key={child.id} aria-expanded="true" aria-level="2" role="treeitem" onClick={this.toggleTree} >
                            <div className="slds-tree__item">
                              <button className={child.children?'slds-button slds-button_icon slds-m-right_x-small':'slds-button slds-button_icon slds-m-right_x-small slds-is-disabled'} aria-hidden="true" tabIndex="-1" title="Expand Tree Item">
                                <span className="slds-button__icon slds-button__icon_small fa fa-chevron-right"></span>
                              </button>
                              <span className="slds-has-flexi-truncate" onClick={()=>child.children?'':this.itemClicked(child)}>
                                <span className="slds-tree__item-label slds-truncate" title="Tree Item">{child.name}</span>
                              </span>
                            </div>
                            <ul role="group">
                            {
                              child.children && child.children.map(grand => {
                                return (
                                  <li key={grand.id} aria-level="3" aria-expanded="true" role="treeitem" onClick={this.toggleTree} >
                                     <div className="slds-tree__item">
                                      <button className="slds-button slds-button_icon slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabIndex="-1" title="Expand Tree Item">
                                        <span className="slds-button__icon slds-button__icon_small fa fa-chevron-right"></span>
                                      </button>
                                      <span className="slds-has-flexi-truncate" onClick={()=>grand.children?'':this.itemClicked(grand)}>
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

TreeMenu.propTypes = {
  categories: PropTypes.any.isRequired,
  itemSelected: PropTypes.func
}

export default  TreeMenu;