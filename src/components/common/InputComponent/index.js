import React from 'react';
import { Input } from 'reactstrap';
import propTypes from 'prop-types';

const InputComponent = ({inputType, inputName, inputId, inputPlaceholder, onChangeHandler, className, minValue, inputValue}) => (
    <Input className={className} type={inputType} name={inputName} id={inputId} placeholder={inputPlaceholder} onChange={onChangeHandler} min={minValue} value={inputValue}/>
);

InputComponent.propTypes = {
    inputType: propTypes.string,
    inputName: propTypes.string,
    inputId: propTypes.string,
    inputPlaceholder: propTypes.string,
    onChangeHandler: propTypes.func,
    className: propTypes.string,
    minValue: propTypes.number,
    inputValue: propTypes.string
}

export default InputComponent;
