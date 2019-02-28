import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const Spinner = (props) => {
  return (
    <>
      {props.loader.isLoading?(
      <div className="demo-only" >
        <div role="status" className="slds-spinner slds-spinner_large slds-spinner_brand">
          <span className="slds-assistive-text">Loading</span>
          <div className="slds-spinner__dot-a"></div>
          <div className="slds-spinner__dot-b"></div>
        </div>
      </div>
      ):''
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  loader: state.loader
})

Spinner.propTypes = {
  loader: PropTypes.object.isRequired
}


export default  withRouter(connect(mapStateToProps, {})(Spinner));
