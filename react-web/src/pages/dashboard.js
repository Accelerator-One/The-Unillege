import React, { Component } from "react";
import { connect } from "react-redux";
import { posts, auth } from "../actions";
import DashboardView from './dashboardView';

class Dashboard extends Component {
  
  // componentDidMount() {
  //   this.props.fetchNotes();
  // }

  render(){ 
  return <DashboardView props={this.props}/>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    user: state.auth.user,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
