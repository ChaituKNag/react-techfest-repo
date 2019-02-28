import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../../store/actions';
import './search.css';

class AutoSuggestion extends Component {


  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      filteredSuggestions: [],
      showSuggestions: false
    }
  }

  filterResult(evt) {
    this.setState({
      userInput: evt.target.value,
      showSuggestions: evt.target.value ? true : false,
      filteredSuggestions: this.props.suggestions.filter(result=> result.name.toLowerCase().indexOf(evt.target.value)!=-1)
    })
  }

  selectedProduct(id,evt){
    this.setState({
      userInput: evt.target.innerText,
      showSuggestions: false
    })
    this.props.fetchSingleProduct(id);
  }

  render(){
    return(
      /* <div className="suggestion-bgColor">
         <input
          type="text"
          onChange = { this.filterResult.bind(this)}
          value= {this.state.userInput}
        />.
        { this.state.showSuggestions ?
        <div>{this.state.filteredSuggestions.map(result=>{
       return(
         <ul className="suggestions">
           <li onClick={this.selectedProduct.bind(this,result.id)} key={result.id}>{result.name}</li>
         </ul>
       )
     }) }</div> : ""

        }
      </div> */
      


<div className="searchbox col-md-6">
<form className="form-inline">
<i class="fa fa-search fa-lg" aria-hidden="true"></i>
<input className="form-control mr-sm-2"
          type="search"
          onChange = { this.filterResult.bind(this)}
          value= {this.state.userInput}
          placeholder="search."
        />
        { this.state.showSuggestions ?
        <div>{this.state.filteredSuggestions.map(result=>{
       return(
         <ul className="suggestions">
           <li onClick={this.selectedProduct.bind(this,result.id)} key={result.id}>{result.name}</li>
         </ul>
       )
     }) }</div> : ""

        }
</form>
</div> 
 

    );
  }
}

export default connect(null,{ fetchSingleProduct })(AutoSuggestion);