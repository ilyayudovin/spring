import React from 'react';
import { Redirect } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isLoggedIn = () => localStorage.getItem('token');

  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  }

  return children;
};

export default RequireAuth;
