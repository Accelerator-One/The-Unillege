import React, { Component } from "react";
import { connect } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { posts, auth, alumni, events, notes } from "../actions";
import DashboardView from './dashboardView';

class Dashboard extends Component {
  
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchAlumni();
    this.props.fetchEvents();
    this.props.fetchNotes();
  }

  render(){ 
  return <DashboardView props={this.props}/>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    user: state.auth.user,
    alumni: state.alumni,
    events: state.events,
    notes: state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(posts.fetchPosts());
    },
    addPost: (title,content, image, user) => {
      return dispatch(posts.addPost(title,content,image, user));
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
    fetchNotes: () => {
      dispatch(notes.fetchNotes());
    },
    addNote: (title,pdf) => {
      return dispatch(notes.addNote(title,pdf));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
