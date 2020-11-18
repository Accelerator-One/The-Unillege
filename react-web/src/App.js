import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// UI Components
import DashBoard from "./pages/dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";

// Redux-config
import unillegeApp from "./reducers";
import { auth } from "./actions";

// Create store and apply middleware
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

          if (this.props.auth.isLoading)
            return <em>Loading...</em>;
          else if (!this.props.auth.isAuthenticated)
            return <Redirect to="/login" />;
          
          return <ChildComponent {...props} />;

        }}
      />
    );
  };

  render() {
    
    let { PrivateRoute } = this;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute path="/" component={DashBoard} />
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
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
