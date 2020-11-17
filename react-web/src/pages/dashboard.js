import React, { useEffect, Component } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventIcon from "@material-ui/icons/Event";
import ForumIcon from "@material-ui/icons/Forum";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { connect } from "react-redux";
import { posts, auth } from "../actions";

import { Switch, Route, NavLink } from "react-router-dom";


import Alumni from "./Alumni";
import Events from "./Events";
import Forum from "./Forum";
import swal from "sweetalert";

const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   appBar: {
//     backgroundColor: "#4a418c",
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   hide: {
//     display: "none",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: "nowrap",
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerClose: {
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: "hidden",
//     width: theme.spacing(7) + 1,
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9) + 1,
//     },
//   },
//   toolbar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchNotes();
}
  // const classes = useStyles();
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
  // console.log(this.props);
  // handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // useEffect(() => {
  //   this.props.fetchPosts();
  // });
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  render(){
   
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            
            edge="start"
           
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            UNILLEGE
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        
      >
        <div >
          <IconButton >
            
          </IconButton>
        </div>

        <Divider />
        <List>
          <ListItem button key="dashboard">
            <ListItemIcon>
              <NavLink to="/">
                <DashboardIcon />
              </NavLink>
            </ListItemIcon>
            <NavLink to="/">
              <ListItemText primary="Dashboard" />
            </NavLink>
          </ListItem>

          <ListItem button key="events">
            <ListItemIcon>
              <NavLink to="/events">
                <EventIcon />
              </NavLink>
            </ListItemIcon>
            <NavLink to="/events">
              <ListItemText primary="Events" />
            </NavLink>
          </ListItem>

          <ListItem button key="posts">
            <ListItemIcon>
              <NavLink to="/forum">
                <ForumIcon />
              </NavLink>
            </ListItemIcon>
            <NavLink to="/forum">
              <ListItemText primary="Forum" />
            </NavLink>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="alumni">
            <ListItemIcon>
              <NavLink to="/alumni">
                <PersonIcon />
              </NavLink>
            </ListItemIcon>
            <NavLink to="/alumni">
              <ListItemText primary="Alumni" />
            </NavLink>
          </ListItem>

          <ListItem
            button
            key="logout"
            onClick={this.props.logout}
          >
            <ListItemIcon>
              <ExitToAppIcon style={{ color: "#3f51b5" }} />
            </ListItemIcon>
            <ListItemText primary="Logout" style={{ color: "#3f51b5" }} />
          </ListItem>
        </List>
      </Drawer>
      <main >
        <div  />

        <Switch>
          <Route path="/events" component={Events}></Route>
          <Route path="/forum" component={Forum}></Route>
          <Route path="/alumni" component={Alumni}></Route>
          <Route path="/" component={Dashboard}></Route>
        </Switch>
      </main>
      
      
    </div>
  )}
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
