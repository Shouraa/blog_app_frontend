import React, { useState, useEffect } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';

// import { isLoggedIn } from './actions/login';
import { initializeBlogs } from './actions/blog';

// import Notification from './components/Notification';
// import Footer from './components/Footer';
// import Blog from './components/Blogs/Blog/Blog';
// import User from './components/User';
// import NavigationBar from './components/NavigationBar';
// import Users from './components/Users';
// import Login from './components/Login';
// import PrivateRoute from './components/PrivateRoute';
// import NotFound from './components/NotFound';
import Blogs from './components/Blogs/Blogs';
import BlogForm from './components/BlogForm/BlogForm';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(isLoggedIn());
  // }, []);

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Blogs
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
              <BlogForm currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Blogs setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>

      {/* <NavigationBar />

      <Notification />

      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/BlogForm" component={BlogForm} />
        <Route exact path="/blogs/:id" component={Blog} />
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/" component={Blogs} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer /> */}
    </Container>
  );
};

export default App;
