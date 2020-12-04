import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
//import * as api from '../../api';
import game from '../../screens/Edit'
import Edit from '../../screens/Edit'

//const game = api.show(api.DEFAULT_NAME);


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