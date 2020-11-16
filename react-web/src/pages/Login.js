import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import swal from "sweetalert";
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },

      form: {
        width: "100%",
      },
    };
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={this.onSubmit} noValidate>
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

            <Button type="submit" fullWidth variant="contained" color="primary">
              Submit
            </Button>
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
        {this.props.errors.length > 0 && (
          <ul>
            {this.props.errors.map((error) => (
              <li key={error.field}>{error.message}</li>
            ))}
          </ul>
        )}
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
