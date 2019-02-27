import React from 'react';
import styled from 'styled-components';
import { platinum } from '../../../styles/colors';

const InputBox = styled.input`
background: transparent;
border-radius: 5px;
border: 1px solid ${platinum};
padding: 5px;
outline: none;
&:focus{
  outline: none;
}
`

const QuantityTextBox = () => {
  return (
    <InputBox type='number' placeholder='Quantity' />
  )
}

export default QuantityTextBox;