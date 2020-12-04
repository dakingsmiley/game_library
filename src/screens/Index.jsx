import React, { useEffect, useState } from 'react';
import Container from '../components/layout/Container';
import * as api from '../api';
import Screen from '../components/layout/Screen';
import EmptyCard from '../components/cards/EmptyCard';
import { Link } from '@reach/router';

const Index = () => {
  const [games, setGames] = useState([]);

  useEffect( () => {
    setGames(api.get(api.DEFAULT_NAME));
  }, []);

  return (
    <Screen>
      <Container>
        {games.length === 0 
        ? (
            <EmptyCard to="new" />
        ) : (
          <>
            {games.map((game, index) => (
               <Link to={`${index}/edit`} className="card">
                 <div className="card__header">
                  <h2>{game.name}</h2>
                   <p>{game.author}</p>
                 </div>
                 <div className="card__content">
                   <p>{game.description}</p>
                 </div>
                 <div className="card__footer">
                  <p>Dificultad: {game.difficulty}</p>
                  <p>Tiempo de juego: {game.gamingTime}</p>
                 </div>
             </Link>
            ))}
          </>
        )}
      </Container>
    </Screen>
  );
};

export default Index;
