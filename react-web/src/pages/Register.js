import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { auth } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Copyright from "../components/Copyright";

class Register extends Component {
  
  state = {
    username: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state.username, this.state.password);
  };

  render() {

    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }

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
        }
    }

    return (
      <Container component="main" maxWidth="xs" style={{ 
        'backgroundColor':'#f0f0f0',
        'borderRadius':'12px',
        'height':'96vh',
        'marginTop':'2vh' 
      }}>
        <br/><br/>
        <br/><br/>

        <CssBaseline />
        <div className={styles.paper}>
          <Avatar className={styles.avatar} color='primary'>
            <LockOutlinedIcon color='primary'/>
          </Avatar>
          <br/>
          <Typography component="h1" variant="h5" style={{ 'textAlign':'center' }} >
            REGISTER
          </Typography>
          <br/>
          
          <form noValidate onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </Grid>
            </Grid>
            <br/><br/>
            <Button type="submit" fullWidth variant="contained" color="primary">
              REGISTER
            </Button>
            <br/><br/>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="../" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        
        </div>
        <Box mt={5}>
        </Box>
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
    register: (username, password) =>
      dispatch(auth.register(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);