import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { isLoggedIn } from './actions/login';

import Notification from './components/Notification';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import User from './components/User';
import NavigationBar from './components/NavigationBar';
import Users from './components/Users';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import CreateBlog from './components/CreateBlog';
import NotFound from './components/NotFound';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoggedIn());
  }, [dispatch]);

  return (
    <div>
      <NavigationBar />
      <Notification />

      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/createBlog" component={CreateBlog} />
        <Route exact path="/blogs/:id" component={Blog} />
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/" component={Blogs} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
