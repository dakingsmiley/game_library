import React from 'react';

const InputText = (props) => (
  <input type="text" value={props.value} onChange={props.onChange}/>
);

export default InputText;
