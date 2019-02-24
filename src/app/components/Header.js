import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchUser } from '../../store/actions/user'
import { selectUserDetails } from '../../store/selectors'

class Header extends PureComponent{

  componentDidMount(){
    this.props.fetchUser(1);
  }

  render(){
    return (
      <div>
        This is the header of the app
        Getting data from store <br/>
        Name = {this.props.user.details.name}<br/>
        Loading = {this.props.user.loading ? 'True' : 'False'}
      </div>
    )

  }
}

Header.propTypes = {
  user: PropTypes.shape({
    details: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profileImageUrl: PropTypes.string
    }),
    loading: PropTypes.bool,
    error: PropTypes.object
  }),
  getUser: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
  return ({
    user: selectUserDetails(state),
    ...ownProps
    })
}

  
export default connect(
  mapStateToProps,
  {
    fetchUser
  }
)(Header)
