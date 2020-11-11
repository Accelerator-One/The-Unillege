import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import DashBoard from './dashboard';
import Login from './login';

class App extends React.Component {

    constructor(props) {
        super(props);
        // TODO : Toggle login var below to change auth state
        let login = false;
        this.state = {
          login : login
        }
    }

    // TODO : Fetch User Session Cookies
    fetchCookies = function() {
      return;
    }

    // Change Login state
    changeLogin = (loginState)=> {
      this.setState({
        login : loginState
      });
    }


    render() {

        const renderer = this.state.login?
                          <DashBoard listener={this.changeLogin}/> :
                          <Login listener={this.changeLogin} />;

        return (
          <Router>
            { renderer }
          </Router>
        )
    }
}

export default App;
