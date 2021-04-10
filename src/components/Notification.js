import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const styles = {
    color: 'green',
    background: 'lightgray',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  const message = useSelector((state) => state.notifications.notification);
  const type = useSelector(({ notifications }) => notifications.type);

  if (!message) {
    return null;
  }
  return (
    <div style={type === 'success' ? styles : { ...styles, color: 'red' }}>
      {message}
    </div>
  );
};

export default Notification;
