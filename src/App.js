import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import News from './pages/News';
import IndicesPerformance from './pages/IndicesPerformance';
import StockBasket from './pages/StockBasket';
import StockInfo from './pages/StockInfo';
import Compare from './pages/Compare';
import {Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Axios from 'axios';
import React, { useContext, createContext, useEffect, useState } from "react";
import { connect } from "react-redux";


function setTToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getTToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken;
}

function App(props) {

  const token = getTToken();

  const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    (token != null) ? (
      <Component {...props} token={token}/>
    ) : (
      <Redirect to='/login'/>
    )
  )}/>
);



  return (
        <Switch>
        <Route exact path="/register" component={Register}/>
        <Route path='/' exact component={Main} />
        <Route exact
        path="/login"
          render={(props) => <Login {...props} setTToken={setTToken} />}
          />
        <PrivateRoute exact path="/portfolio" component={Portfolio} />
        <PrivateRoute exact path="/news" component={News} />
        <PrivateRoute exact path="/indicesperformance" component={IndicesPerformance} />
        <PrivateRoute exact path="/compare" component={Compare} />
        <PrivateRoute exact path="/stockbasket"  component={StockBasket} />
        <PrivateRoute exact path="/stockinfo"  component={StockInfo} />
        </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
  token: state.token
}}

export default App;
