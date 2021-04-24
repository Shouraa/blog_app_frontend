import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { initializeBlogs } from '../actions/blog';

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(({ blogList }) =>
    blogList.blogs.sort((a, b) => b.likes - a.likes)
  );

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h1" color="primary" align="center">
        List of Blogs
      </Typography>
      <ul>
        {blogs.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`}>
            <li>
              <img
                style={{ width: 120, height: 120 }}
                src="https://images.unsplash.com/photo-1612620485998-fe926eccbe18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=657&q=80"
              />
              <div style={{ display: 'inline-block' }}>
                <h4>{blog.title}</h4>
                <h5>likes: {blog.likes}</h5>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Blogs;
