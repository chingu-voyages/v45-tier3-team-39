import React from 'react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = (
    username: string,
    password: string,
    redirectPath: string
  ) => {
    if (username.trim() !== '' && password.trim() !== '') {
      console.log('Login success');
      localStorage.setItem('token', 'example_token');
      navigate(redirectPath);
    } else {
      console.log('Login failed');
    }
  };

  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
