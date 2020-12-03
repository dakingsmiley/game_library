import React from 'react';
import { Link } from '@reach/router';

const EmptyCard = (props) => (
  <div className="card--empty">
    <p>¡Todavía no has incluido ningún Juego!</p>
      <Link to={props.to} className="btn--action">
        Incluye el primero
      </Link>
  </div>
)

export default EmptyCard;
