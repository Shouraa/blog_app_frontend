import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { logoutUser } from '../actions/login';

const NavigationBar = () => {
  const styles = {
    padding: 16,
    textDecoration: 'none',
  };
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const user = useSelector(({ user }) => user.user);

  const handleLog = () => {
    if (user) {
      dispatch(logoutUser());
    }
    history.push('/login');
  };
  // console.log(location);
  const isLogin = location.pathname === '/login';
  return (
    <div>
      <Link style={styles} to="/">
        blogs
      </Link>
      <Link style={styles} to="/users">
        users
      </Link>
      <Link style={styles} to="/createBlog">
        Create a Blog
      </Link>
      <span>{user ? `${user.name} is logged in` : ''} </span>

      {!isLogin && (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleLog}
        >
          {user ? 'Logout' : 'Login'}
        </Button>
      )}
    </div>
  );
};

export default NavigationBar;
