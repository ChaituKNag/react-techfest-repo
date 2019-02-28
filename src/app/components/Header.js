import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Search from '../components/base/Search'
import { connect } from 'react-redux'
import { fetchUser } from '../../store/actions/user'
import { selectUserDetails } from '../../store/selectors'
import { media, fontWeightLight } from '../../styles/variables'
import HeaderTag from '../components/base/HeaderTag'
import { charcoal, mustard } from '../../styles/colors'
import { USER_ID } from '../../constants/config'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.div`
  align-items: center;
  background-color: ${charcoal};
  color: ${mustard};
  display: flex;
  position:fixed;
  width: 100%;
  z-index: 1050;
  ${media.mobile`padding: 15px;`};
`

const HeaderInnerWrapper = styled.div`
  display:flex;
  max-width: 1400px;
  padding: 12px 70px;
  margin: 0 auto;
  width: 100%;
`

const SubTitle = styled.div`
    font-size: 12px;
    font-weight: ${fontWeightLight};
    margin: 0;
`

const ActionGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 0.5;
  .icon {
    margin-right: 20px;
    font-size: 30px;
  }
`

const UserIcon = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`

const StyledLink = styled(Link)`
  color: ${mustard};
  text-decoration: none;
`

class Header extends PureComponent {

  componentDidMount() {
    this.props.fetchUser(USER_ID)
  }

  render() {

    const { details: { profileImageUrl, name } } = this.props.user
    return (
      <HeaderWrapper>
        <HeaderInnerWrapper>
          <StyledLink to={'/'}>
            <div>
              <HeaderTag as='h4'>E-Commerce</HeaderTag>
              <SubTitle>Platform</SubTitle>
            </div>
          </StyledLink>
          <Search />
          <ActionGroup>
            <StyledLink to={'/cart'}><span className="icon icon-basket"></span></StyledLink>
            <UserIcon src={profileImageUrl} alt={name} />
          </ActionGroup>
        </HeaderInnerWrapper>
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

Header.propTypes = {
  fetchUser: PropTypes.func
}


export default connect(
  mapStateToProps,
  {
    fetchUser
  }
)(Header)
