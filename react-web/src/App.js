import React, {Component} from 'react';
import { BrowserRouter, withRouter } from "react-router-dom";
import {Provider, connect} from "react-redux";
import DashBoard from './dashboard';
import Register from './register';
import Login from './login';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import unillegeApp from "./reducers"; //TODO 
import { Switch } from '@material-ui/core';

// let store = createStore(
//   unillegeApp, applyMiddleware(thunk)
//   );

class App extends Component {

    constructor(props) {
        super(props);
        // TODO : Toggle login var below to change auth state
        let login = false;
        this.state = {
          login : login
        }
    }

    // TODO : Fetch User Session Cookies
    // fetchCookies = function() {
    //   return;
    // }

    // Change Login state
    changeLogin = (loginState)=> {
      this.setState({
        login : loginState
      });
    }


    render() {

        console.log(this.props.location.pathname);
        const renderer = !this.state.login ?
                        (
                          this.props.location.pathname==='/register'?
                          <Register/>:
                          <Login listener={this.changeLogin} />
                        )
                        : <DashBoard listener={this.changeLogin}/>;

        return (
          <>
          { renderer }
          </>
          
        )
    }
}

export default withRouter(App);
