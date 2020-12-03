import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Index from './screens/Index';
import New from './screens/New';
import Show from './screens/Show';
import Edit from './screens/Edit';

const App = () => (
  <Router>
    <Index path="/" />
    <New path="new" />
    <Show path=":id" />
    <Edit path=":id/edit" />
  </Router>
)

export default App;
