import React from 'react';
import { Input } from 'reactstrap';

const InputComponent = ({inputType, inputName, inputId, inputPlaceholder, onChangeHandler, className, minValue}) => (
    <Input className={className} type={inputType} name={inputName} id={inputId} placeholder={inputPlaceholder} onChange={onChangeHandler} min={minValue}/>
);

export default InputComponent;
