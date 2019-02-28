import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { platinum } from '../../../styles/colors'
import { connect } from 'react-redux'
import { updateQuantity } from '../../../store/actions/cart'

const InputBox = styled.input`
background: transparent;
border-radius: 5px;
border: 1px solid ${platinum};
padding: 5px;
outline: none;
width: 125px;
&:focus{
  outline: none;
}
`

const QuantityTextBox = ({ text, id, updateQuantity }) => {

  const changeQuantity = (e) => {
    updateQuantity(e.target.value, id)
  }
  return (
    <InputBox type='number' placeholder='Quantity' value={text} onChange={(e) => changeQuantity(e)} />
  )
}


QuantityTextBox.propTypes = {
  text: PropTypes.number,
  id: PropTypes.number,
  updateQuantity: PropTypes.func
}

const mapStateToProps = () => ({})

export default connect(
  mapStateToProps,
  {
    updateQuantity
  }
)(QuantityTextBox)