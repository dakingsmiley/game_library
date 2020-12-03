import React from 'react';
import FormGroup from './FormGroup';
import InputText from './InputText';
import Label from './Label';

const InputField = (props) => (
  <FormGroup>
    <Label name={props.name} />
    <InputText value={props.value} onChange={props.onChange} />
  </FormGroup>
);

export default InputField;
