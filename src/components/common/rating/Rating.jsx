import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'
import './Rating.scss';

const Rating = ({rated,outof}) => {
  let Rating = [];
  
  //check whether number is whole or decimal
  rated = parseFloat(rated);

  let isDecimal = false;
  
  let wholePart = Math.floor(rated);

  if(Math.floor(rated) === rated){
    isDecimal = false;
  }else{
    isDecimal = true;
  }

  if(isDecimal){
    for(let i=0;i<outof;i++){
      if(i<wholePart){
        Rating.push(<span key={i} className="fa fa-star star-filled mr-1"></span>)
      }
      else if(i===wholePart){
        Rating.push(
          <span key={i} className="fa fa-star-half-o star-filled mr-1" ></span>
        )
      }
      else{
        Rating.push(<span key={i} className="fa fa-star star-unfilled mr-1"></span>)
      }
    }
  }
  else{
    for(let i=0;i<outof;i++){
      if(i<wholePart){
        Rating.push(<span key={i} className="fa fa-star star-filled mr-1"></span>)
      }
      else{
        Rating.push(<span key={i} className="fa fa-star star-unfilled mr-1"></span>)
      }
    }
  }


  

  return (
    <>
    <span data-tip={'Rating: '+rated}>
      {Rating}
    </span>
    <ReactTooltip place="top" type="dark" effect="float"/>
    </>
  )
}

Rating.propTypes={
  rated: PropTypes.number.isRequired,
  outof: PropTypes.number.isRequired
}

export default Rating;
