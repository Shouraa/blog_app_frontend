import React from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/login';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(
      loginUser({
        username: event.target.username.value,
        password: event.target.password.value,
      })
    ).then((res) => {
      if (res) {
        console.log(res);
        history.push('/');
        event.target.username.value = '';
        event.target.password.value = '';
      }
    });
  };

  return (
    <div>
      <h3>log in to application</h3>
      <form id="loginForm" onSubmit={handleLogin}>
        <div>
          username
          <input id="username" type="text" name="Username" />
        </div>
        <div>
          password
          <input id="password" type="text" name="Password" />
        </div>
        <button id="login-button" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
