import React from 'react';

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
  };

  return (
    <div style={footerStyle}>
      <br />
      <em>Blog app, Metropolia University of Applied Sciences 2021</em>
    </div>
  );
};

export default Footer;
