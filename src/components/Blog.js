import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeBlog, updateBlog } from '../reducers/blogReducer';

import { useRouteMatch } from 'react-router-dom';

// user, removeBlog,handleChange
const Blog = () => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 4,
    border: 'solid ',
    marginBottom: 4,
  };
  // const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const match = useRouteMatch('/blogs/:id');
  const blog = match ? blogs.find((blog) => blog.id === match.params.id) : null;

  // const hideWhenVisible = { display: visible ? 'none' : '' };
  // const showWhenVisible = { display: visible ? '' : 'none' };

  // const compare = user.name.toLowerCase() === blog.author.toLowerCase();

  // const removeStyle = { display: compare ? '' : 'none' };

  // const toggleVisibility = () => {
  //   setVisible(!visible);
  // };

  const handleLikes = async (id, buttonType) => {
    const blog = blogs.find((n) => n.id === id);
    const changedBlog =
      buttonType === 'like'
        ? { ...blog, likes: blog['likes'] + 1 }
        : { ...blog, likes: blog['likes'] - 1 };
    dispatch(updateBlog(changedBlog));
  };

  const handleLike = (event) => {
    handleLikes(blog.id, event.target.value);
  };

  const handleRemove = (id) => {
    if (window.confirm(`Remove '${blog.title}'?`)) {
      // removeBlog(blog.id);
      dispatch(removeBlog(id));
    }
  };
  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}{' '}
      </div>
      <div>
        <p>{blog.url}</p>
        <p>
          {' '}
          {blog.likes} likes
          <input
            id="like-button"
            type="button"
            value="like"
            onClick={handleLike}
          />{' '}
          <input type="button" value="dislike" onClick={handleLike} />
        </p>
        {/* <p>user: {user.name}</p> */}
        {/* style={removeStyle}  */}
        <button id="remove-button" onClick={() => handleRemove(blog.id)}>
          remove
        </button>
      </div>
    </div>
  );
};

// Blog.propTypes = {
//   blog: PropTypes.object.isRequired,
// };

export default Blog;

// return (
//   <div style={blogStyle}>
//     <div>
//       {blog.title} {blog.author}{' '}
//       <button id="toggleInfo-button" onClick={toggleVisibility}>
//         {visible ? 'hide' : 'view'}
//       </button>
//     </div>
//     <div style={showWhenVisible} className="togglableContent">
//       <p>{blog.url}</p>
//       <p>
//         {' '}
//         likes: {blog.likes}{' '}
//         <input
//           id="like-button"
//           type="button"
//           value="like"
//           onClick={handleLike}
//         />{' '}
//         <input type="button" value="dislike" onClick={handleLike} />
//       </p>
//       {/* <p>user: {user.name}</p> */}
//       {/* style={removeStyle}  */}
//       <button id="remove-button" onClick={() => handleRemove(blog.id)}>
//         remove
//       </button>
//     </div>
//   </div>
// );
