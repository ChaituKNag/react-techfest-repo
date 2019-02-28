import React , { Component } from 'react';
import { connect } from 'react-redux';
import { listGridView } from '../../store/actions'
import './listgrid.css';

class ListGridToggle extends Component {

  constructor(props){
    super(props);
    this.state = {
      isActive : true,
      view: 'card'
    }
  }

  listView(){
    this.setState({
      isActive : true,
      view: 'list'
    });
    this.props.listGridView("list");
  }

  gridView(){
    this.setState({
      isActive : true,
      view: 'card'
    });
     this.props.listGridView("card");
  }
  render(){
    return(
      <div id="btnContainer">
        <button className={`btn ${this.state.isActive && (this.state.view == 'list') ? 'active':''}`} onClick={this.listView.bind(this)}><i className="glyphicon glyphicon-th-list"></i> List</button> 
        <button className={`btn ${this.state.isActive && (this.state.view == 'card') ? 'active':''}`} onClick={this.gridView.bind(this)}><i className="glyphicon glyphicon-th-large"></i> Grid</button>
      </div>
    )
  }
}

export default connect(null , { listGridView })(ListGridToggle);