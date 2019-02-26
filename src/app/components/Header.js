import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from '../components/base/Search';
import { connect } from 'react-redux';
import { fetchUser } from '../../store/actions/user';
import { selectUserDetails } from '../../store/selectors';
import { media, fontWeightMedium } from '../../styles/variables';
import HeaderTag from '../components/base/HeaderTag';
import { charcoal } from '../../styles/colors';

const HeaderWrapper = styled.div`
  align-items: center;
  background-color: ${charcoal};
  color: #F2BD00;
  display: flex;
  padding: 15px 30px;
  ${media.mobile`padding: 15px;`};
`

const SubTitle = styled.div`
    font-size: 1.125em;
    font-weight: ${fontWeightMedium};
    margin: 0;
`

const ActionGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 0.5;
  .icon {
    margin-right: 20px;
    font-size: 36px;
  }
`

const UserIcon = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`

class Header extends PureComponent{

  componentDidMount(){
    this.props.fetchUser(2);
  }

  render(){

    const { details : { profileImageUrl, name } } = this.props.user;
    return (
      <HeaderWrapper>
        <div>
          <HeaderTag as='h2'>E-Commerce</HeaderTag>
          <SubTitle>Platform</SubTitle>
        </div>
        <Search />
        <ActionGroup>
          <span className="icon icon-basket"></span>
          <UserIcon src={profileImageUrl} alt={name} />
        </ActionGroup>
      </HeaderWrapper>
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

const mapStateToProps = (state, ownProps) => ({
  user: selectUserDetails(state),
  ...ownProps
})

  
export default connect(
  mapStateToProps,
  {
    fetchUser
  }
)(Header)
