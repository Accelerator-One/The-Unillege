import React, { Component } from "react";
import { connect } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { posts, auth, alumni, events } from "../actions";
import DashboardView from './dashboardView';

class Dashboard extends Component {
  
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchAlumni();
    this.props.fetchEvents();
  }

  render(){ 
    console.log(this.props);
  return <DashboardView props={this.props}/>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    user: state.auth.user,
    alumni: state.alumni,
    events: state.events,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(posts.fetchPosts());
    },
    addPost: (text) => {
      return dispatch(posts.addPost(text));
    },
    updatePost: (id, text) => {
      return dispatch(posts.updatePost(id, text));
    },
    deletePost: (id) => {
      dispatch(posts.deletePost(id));
    },
    logout: () => dispatch(auth.logout()),
    fetchAlumni: () => {
      dispatch(alumni.fetchAlumni());
    },
    fetchEvents: () => {
      dispatch(events.fetchEvents());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
