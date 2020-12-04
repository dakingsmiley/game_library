import React from 'react';
import { Link } from '@reach/router';

const AddyCard = (props) => (
  <div className="card--add">
    <Link to={props.to} className="btn">
          <h2>Añadir</h2>
    </Link>
  </div>
)

export default AddyCard;
