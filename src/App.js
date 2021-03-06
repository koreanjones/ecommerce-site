import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';



function App() {
  return (
    <div className='App'>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInSignUpPage}/>
    </Switch>
    </div>
  );
}

export default App;
