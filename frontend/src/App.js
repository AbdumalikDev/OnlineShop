import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Feature from './components/Feature';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />

        <Route path='/' component={HomeScreen} exact />
        <Route path='/login' component={LoginScreen} exact />
        <Route path='/product/:id' component={ProductScreen} exact />

        <Feature />
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
