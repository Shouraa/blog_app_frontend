import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Blog from './Blog/Blog';
import useStyles from './styles';

const Blogs = ({ setCurrentId }) => {
  const classes = useStyles();

  const blogs = useSelector(({ blogList }) => blogList.blogs);

  return !blogs.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {blogs.map((blog) => (
        <Grid key={blog.id} item xs={12} sm={6}>
          <Blog blog={blog} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
