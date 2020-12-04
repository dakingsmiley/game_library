import React, { useEffect, useState } from 'react';
import Container from '../components/layout/Container';
import * as api from '../api';
import Screen from '../components/layout/Screen';
import EmptyCard from '../components/cards/EmptyCard';
import FullyCard from '../components/cards/FullyCard';
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
            <FullyCard to={`${index}/edit`} game={game} />
          ))}

          <Link to="/new" className="btn-action">Añadir</Link>
          </>
        )}
      </Container>
    </Screen>
  );
};

export default Index;
