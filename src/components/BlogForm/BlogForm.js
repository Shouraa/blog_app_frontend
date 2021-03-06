import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import FileBase from 'react-file-base64';
import useStyles from './styles';
import { addBlog, updateBlog } from '../../actions/blog';

const BlogForm = ({ currentId, setCurrentId }) => {
  const [blogData, setBlogData] = useState({
    title: '',
    message: '',
    tags: '',
    imgFile: '',
  });

  const blog = useSelector(({ blogList }) =>
    currentId ? blogList.blogs.find((b) => b.id === currentId) : null
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('loggedUser'));

  useEffect(() => {
    if (blog) {
      setBlogData(blog);
    }
  }, [blog]);

  const reset = () => {
    setCurrentId(0);
    setBlogData({
      title: '',
      message: '',
      tags: '',
      imgFile: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(addBlog({ ...blogData, name: user?.result?.name }));
      reset();
    } else {
      dispatch(
        updateBlog(currentId, { ...blogData, name: user?.result?.name })
      );
      reset();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please sign in before creating and liking blogs!
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? 'Edit' : 'Create'} a Blog
        </Typography>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={blogData.title}
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={blogData.message}
          onChange={(e) =>
            setBlogData({ ...blogData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={blogData.tags}
          onChange={(e) =>
            setBlogData({ ...blogData, tags: e.target.value.split(',') })
          }
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setBlogData({ ...blogData, imgFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={reset}
          fullWidth
        >
          reset form
        </Button>
      </form>
    </Paper>
  );
};

export default BlogForm;
