import React, { useState } from 'react';
import * as api from '../api';
import {
  navigate,
  Link
} from '@reach/router';
import Form from '../components/form/Form';
import InputField from '../components/form/InputField';
import Container from '../components/layout/Container';
import Screen from '../components/layout/Screen';

const New = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [gamingTime, setGamingTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
      // TODO: Validation
    //const [errors, setErrors] = useState([]);

  const create = () => {
    const game = {
      name: name,
      author: author,
      description: description,
      difficulty: difficulty,
      gamingTime: gamingTime,
    }

    api.create(api.DEFAULT_NAME, game);
    navigate("/");
  }

  return (
    <Screen>
      <Container vertical>
        <Form>
          <InputField 
            name="Nombre" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <InputField 
            name="Autor" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
          />
          <InputField 
            name="Descripción" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <InputField 
            name="Dificultad" 
            value={difficulty} 
            onChange={(e) => setDifficulty(e.target.value)} 
          />
          <InputField 
            name="Tiempo de juego" 
            value={gamingTime} 
            onChange={(e) => setGamingTime(e.target.value)} 
          />
          <input type="submit" value="Crear" onClick={create} />
          <Link to="/" className="btn--action">Cancelar</Link>
        </Form>
      </Container>
    </Screen>  
  )
};

export default New;
