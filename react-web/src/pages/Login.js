import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { auth } from "../actions";
import { Redirect } from "react-router-dom";
import Copyright from "../components/Copyright";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };
  render() {

    const styles = {
      paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      },
      avatar: {
        margin: 'auto'
      },
      form: {
        width: '100%',
        marginTop: '12vh',
      },
      submit: {
        margin: '12vh',
      },
    };
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <Container component="main" maxWidth="xs">
        <br/><br/>
        <br/><br/>
        <CssBaseline />
        <div className={styles.paper}>
          <Avatar className={styles.avatar} color='primary'>
            <AccountCircleOutlinedIcon color='primary' />
          </Avatar>
          <br/>
          <Typography component="h1" variant="h5" style={{ 'textAlign':'center' }}>
            LOGIN
          </Typography>
          {this.props.errors.length > 0 && (
            <h4 style={{'textAlign':'center', 'color':'red' }}>
              {this.props.errors.map((error) => (
                <span key={error.field}>{error.message}</span>
              ))}
              </h4>
          )}
          <form onSubmit={this.onSubmit} className={styles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />

            <br/><br/>

            <Button type="submit" fullWidth variant="contained" color="primary">
              Submit
            </Button>

            <br/><br/>
            <br/><br/>

            <Grid container justify="flex-end">
              <Grid item>
                <Link href="./register" variant="body2">
                  Not having an account? Register
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  let errors = [];
  if (state.auth.errors) {
    errors = Object.keys(state.auth.errors).map((field) => {
      return { field, message: state.auth.errors[field] };
    });
  }
  return {
    errors,
    isAuthenticated: state.auth.isAuthenticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      return dispatch(auth.login(username, password));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
