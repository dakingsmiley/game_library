import React from 'react';

const Container = (props) => (
  <div className={`container${props.vertical ? '--vertical' : ''} wrap`}>
    {props.children}
  </div>
);

export default Container;
