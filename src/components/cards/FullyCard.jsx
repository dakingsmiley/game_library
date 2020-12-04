import React from 'react';
import { Link } from '@reach/router';
import game from '../../screens/Edit'

const FullyCard = (props) => (
    <Link to={props.to} className="card">
    <div className="card__header">
     <h2>{props.game.name}</h2>
      <p>{props.game.author}</p>
    </div>
    <div className="card__content">
      <p>{props.game.description}</p>
    </div>
    <div className="card__footer">
     <p>Dificultad: {props.game.difficulty}</p>
     <p>Tiempo de juego: {game.gamingTime}</p>
    </div>
</Link>
)

export default FullyCard;