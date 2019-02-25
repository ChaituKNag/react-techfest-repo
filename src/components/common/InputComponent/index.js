import React from 'react';
import { Input } from 'reactstrap';

const InputComponent = ({inputType, inputName, inputId, inputPlaceholder, onChangeHandler}) => (
    <Input type={inputType} name={inputName} id={inputId} placeholder={inputPlaceholder} onChange={onChangeHandler}/>
);

export default InputComponent;
