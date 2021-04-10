import React, { useEffect } from 'react';
import { initializeUsers } from '../reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(initializeUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Users</h1>
      <h3>blogs created</h3>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <Link to={`/users/${user.id}`}>
              <div>
                {user.name}
                <div
                  style={{
                    display: 'inline-block',
                    marginLeft: 16,
                  }}
                >
                  {' '}
                  {user.blogs.length}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
