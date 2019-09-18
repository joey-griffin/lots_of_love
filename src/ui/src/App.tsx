import React from 'react';
import './App.css';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Craplist } from './components/Craplist';

const App: React.FC = () => {
  return (
    <Layout>
      <Route exact path='/' component={Craplist} />
      <Route exact path='/submit' component={Home} />
    </Layout>
  );
}

export default App;
