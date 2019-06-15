import React from 'react';
import { Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import setAuthToken from './utils/setAuthToken';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';


import classes from './App.css';

import Layout from './containers/Layout/Layout';
import Landing from './components/Landing/Landing';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';
import Dashboard from './containers/Dashboard/Dashboard';
import CreateProfile from './containers/Dashboard/CreateProfile/CreateProfile';




function App (props) {

  
//Check for token
if(localStorage.token) {
  console.log()
  //Set auth token header authorization
  setAuthToken(localStorage.token);
  //Decode token and get user info and expiration time
  const decoded = jwt_decode(localStorage.token);
  // Set user and isAuthenticated
  props.onLoginSuccess(decoded)
}

  let routes = (
     <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>
  );

  if(props.isAuthenticated) {
    routes= (
      <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/create-profile' component={CreateProfile} />
      </Switch>
    )
  }

  return (
    <div className={classes.App}>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onLoginSuccess: (token) => dispatch(actions.loginSuccess(token))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
