import React from 'react';
// import { Switch, Route } from 'react-router-dom';

import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Homepage from './components/Homepage/Homepage';

const App = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  );
};

export default App;
