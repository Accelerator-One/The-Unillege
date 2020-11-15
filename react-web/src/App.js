import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import { Provider, connect } from "react-redux";
import DashBoard from "./dashboard";
import Register from "./register";
import Login from "./login";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import unillegeApp from "./reducers";
import { auth } from "./actions";
// import { Switch } from '@material-ui/core';

let store = createStore(unillegeApp, applyMiddleware(thunk));

class RootContainerComponent extends Component {
  componentDidMount() {
    this.props.loadUser();
  }
  PrivateRoute = ({ component: ChildComponent, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (this.props.auth.isLoading) {
            return <em>Loading...</em>;
          } else if (!this.props.auth.isAuthenticated) {
            return <Redirect to="/login" />;
          } else {
            return <ChildComponent {...props} />;
          }
        }}
      />
    );
  };
  render() {
    let { PrivateRoute } = this;
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={DashBoard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => {
      return dispatch(auth.loadUser());
    },
  };
};

let RootContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainerComponent);

export default class App extends Component {
  // constructor(props) {
  //     super(props);
  //     // TODO : Toggle login var below to change auth state
  //     let login = false;
  //     this.state = {
  //       login : login
  //     }
  // }

  // TODO : Fetch User Session Cookies
  // fetchCookies = function() {
  //   return;
  // }

  // Change Login state
  // changeLogin = (loginState)=> {
  //   this.setState({
  //     login : loginState
  //   });
  // }

  render() {
    // console.log(this.props.location.pathname);
    // const renderer = !this.state.login ?
    //                 (
    //                   this.props.location.pathname==='/register'?
    //                   <Register/>:
    //                   <Login listener={this.changeLogin} />
    //                 )
    //                 : <DashBoard listener={this.changeLogin}/>;

    return (
      // <>
      // { renderer }
      // </>
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
