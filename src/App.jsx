import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Index from './screens/Index';
import New from './screens/New';
import Show from './screens/show';

const App = () => (
  <Router>
    <Index path="/" />
    <New path="new" />
    <Show path=":id">
      <Edit path="edit" />
    </Show>
  </Router>
)

export default App;
