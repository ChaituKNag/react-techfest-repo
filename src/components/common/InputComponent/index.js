import React from 'react';
import { Input } from 'reactstrap';

const InputComponent = ({ inputType, inputName, inputId, inputPlaceholder }) => (
    <Input type={inputType} name={inputName} id={inputId} placeholder={inputPlaceholder} />
);

export default InputComponent;
